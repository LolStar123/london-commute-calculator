# Working on the commute calculator

Read README.md and PROVENANCE.md first. The full app is examples/portfolio/index.html with the station database in london-stations.js; the retired model.mjs demo is no longer present.

Run `python tools/browser_audit.py` after changing the app. Preserve the real station records, dated fare basis, zone handling, travel patterns, caps and ticket comparisons. Add a browser regression check when changing a calculation or decision.

Inputs stay in the browser. Never add credentials or represent bundled March 2026 fares as live prices.
