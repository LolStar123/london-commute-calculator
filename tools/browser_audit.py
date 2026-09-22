"""Exercise the complete commute calculator locally or against its public deployment."""
import functools
import http.server
import os
import threading
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*args): pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Quiet,directory=str(ROOT/'examples/portfolio')))
threading.Thread(target=server.serve_forever,daemon=True).start()
try:
    with sync_playwright() as p:
        browser=p.chromium.launch(**({'channel':'chrome'} if os.name=='nt' else {}))
        page=browser.new_page(viewport={'width':1280,'height':1000},reduced_motion='reduce')
        errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
        page.goto(os.environ.get('AUDIT_URL',f'http://127.0.0.1:{server.server_port}'),wait_until='networkidle')
        page.wait_for_selector('#res.vis')
        assert page.locator('#fromStation').input_value()=='Stratford'
        before=page.locator('#mbarLabel').inner_text()
        assert 'NaN' not in before and 'Infinity' not in before
        page.locator('#days').select_option('5');page.locator('#goBtn').click()
        page.wait_for_function("expected => document.querySelector('#mbarLabel').innerText!==expected",arg=before)
        page.locator('#days').select_option('3');page.locator('#goBtn').click()
        page.wait_for_function("expected => document.querySelector('#mbarLabel').innerText===expected",arg=before)
        page.locator('#fromStation').fill('Nonexistent station')
        assert not page.locator('#res').is_visible()
        assert 'disabled' in page.locator('#goBtn').get_attribute('class')
        page.locator('#fromStation').fill('Stratford');page.locator('#goBtn').click()
        page.wait_for_selector('#res.vis')
        page.evaluate('window.scrollTo(0,0)')
        page.screenshot(path=str(ROOT/'examples/portfolio/preview.png'))
        page.set_viewport_size({'width':390,'height':844})
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'),'mobile overflow'
        assert not errors,errors
        print('PASS: populated station journey, recalculation, reversal, invalid station, mobile, no JS errors')
        browser.close()
finally: server.shutdown()
