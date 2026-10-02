"""Audit the demo in isolated Chrome, with desktop/mobile evidence in output/qa."""
import functools
import http.server
import json
import os
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
EVIDENCE = ROOT / "output/qa"
EVIDENCE.mkdir(parents=True, exist_ok=True)


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


server = http.server.ThreadingHTTPServer(
    ("127.0.0.1", 0),
    functools.partial(Quiet, directory=str(ROOT / "examples/portfolio")),
)
threading.Thread(target=server.serve_forever, daemon=True).start()
checks = []
errors = []
try:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(
            **({"channel": "chrome"} if os.name == "nt" else {})
        )
        page = browser.new_page(viewport={"width": 1280, "height": 900}, reduced_motion="reduce")
        page.set_default_timeout(10000)
        page.on("pageerror", lambda error: errors.append(str(error)))
        url = os.environ.get("AUDIT_URL", f"http://127.0.0.1:{server.server_port}")
        page.goto(url, wait_until="networkidle")
        page.wait_for_selector("#res.vis")
        assert page.locator("#ret").input_value() == "17:30"
        assert page.locator("#trips").input_value() == "2"
        assert page.locator("#fromStation").input_value() == "Stratford"
        recommendation = page.locator("#reco").inner_text()
        assert "outbound" in recommendation and "return" in recommendation
        assert "08:00" in recommendation and "17:30" in recommendation
        assert "NaN" not in recommendation and "Infinity" not in recommendation
        assert page.locator(".ocard[tabindex]").count() == 0
        assert page.locator(".planner").bounding_box()["x"] < page.locator("#res").bounding_box()["x"]
        checks.append("Default return journey and static alternatives beside planner")
        page.screenshot(path=str(EVIDENCE / "desktop.png"), full_page=True)
        page.screenshot(path=str(ROOT / "examples/portfolio/preview.png"), full_page=True)
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 1")
        page.set_viewport_size({"width": 390, "height": 844})
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 1"), "Mobile overflow"
        page.screenshot(path=str(EVIDENCE / "mobile.png"), full_page=True)
        page.set_viewport_size({"width": 1280, "height": 900})
        checks.append("1280px / 390px layout without overflow")
        before = page.locator("#mbarLabel").inner_text()
        page.locator("#days").select_option("5")
        page.locator("#goBtn").click()
        page.wait_for_function("expected => document.querySelector('#mbarLabel').innerText !== expected", arg=before)
        page.locator("#days").select_option("3")
        page.locator("#goBtn").click()
        page.wait_for_function("expected => document.querySelector('#mbarLabel').innerText === expected", arg=before)
        fare_before = page.locator("#reco").inner_text()
        page.locator("#ret").fill("20:00")
        page.locator("#goBtn").click()
        page.wait_for_function("expected => document.querySelector('#reco').innerText !== expected", arg=fare_before)
        assert "off-peak" in page.locator("#reco").inner_text()
        page.locator("#ret").fill("17:30")
        page.locator("#goBtn").click()
        page.locator("#swapBtn").click()
        assert page.locator("#fromStation").input_value() == "Euston Square"
        assert page.locator("#toStation").input_value() == "Stratford"
        page.locator("#swapBtn").click()
        page.locator("#fromStation").fill("Nonexistent station")
        assert not page.locator("#res").is_visible()
        assert page.locator("#goBtn").is_disabled()
        page.wait_for_selector("#fromDD.open .acd-empty")
        assert page.locator("#goHint").is_visible()
        page.screenshot(path=str(EVIDENCE / "invalid-station.png"))
        page.locator("#fromStation").fill("Stratf")
        page.wait_for_selector("#fromDD.open .aci")
        page.locator("#fromStation").press("ArrowDown")
        assert page.locator("#fromStation").get_attribute("aria-activedescendant")
        page.screenshot(path=str(EVIDENCE / "autocomplete.png"))
        page.locator("#fromStation").press("Enter")
        assert page.locator("#fromStation").input_value() == "Stratford"
        assert page.locator("#fromStation").get_attribute("aria-expanded") == "false"
        page.locator("#toStation").fill("Stratford")
        page.locator("#goBtn").click()
        page.wait_for_selector("#jerr.vis")
        assert not page.locator("#res").is_visible()
        page.locator("#toStation").fill("Euston Square")
        page.locator("#goBtn").click()
        page.wait_for_function("document.querySelector('#goBtn').textContent === 'Compare fares'")
        page.wait_for_selector("#res.vis")
        assert page.locator("#reco").evaluate("el => el === document.activeElement")
        page.locator("#ret").fill("")
        assert page.locator("#goBtn").is_disabled()
        assert not page.locator("#res").is_visible()
        page.locator("#ret").fill("17:30")
        page.locator("#goBtn").click()
        page.wait_for_selector("#res.vis")
        assert page.evaluate("Object.keys(ST).length") > 400
        page.locator("#ret").focus()
        assert page.locator("#ret").evaluate("el => getComputedStyle(el).outlineStyle") != "none"
        page.wait_for_function("document.querySelectorAll('.acd.open').length === 0")
        page.screenshot(path=str(EVIDENCE / "focus.png"))
        page.set_viewport_size({"width": 390, "height": 844})
        page.locator("#ret").focus()
        box = page.locator("#ret").bounding_box()
        assert box and 0 <= box["y"] <= 844
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 1")
        checks.append("Days/return-time calculation, swap, invalid/same station, empty time, 400+ station records, keyboard autocomplete and focus")
        assert not errors, errors
        assert page.evaluate("matchMedia('(prefers-reduced-motion: reduce)').matches")
        checks.append("No JavaScript errors; reduced motion enabled")
        (EVIDENCE / "audit.json").write_text(json.dumps({"checks": checks, "errors": errors, "viewports": [1280, 390]}, indent=2))
        print("PASS: " + "; ".join(checks))
        browser.close()
except Exception:
    raise
finally:
    server.shutdown()
