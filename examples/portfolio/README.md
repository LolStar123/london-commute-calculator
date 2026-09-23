# London commute calculator

[Open the full calculator](https://lolstar123.github.io/london-commute-calculator/) | [application source](index.html) | [station database](london-stations.js)

Choose your stations, travel times and working week. Compare PAYG caps with Travelcards, then include Railcards, annual leave and season-ticket financing. Print or copy the comparison.

The app uses the original station database and March 2026 fare table. Inputs stay in the browser. These are dated fare assumptions, not a live quotation.

From the repository root, run `python -m http.server 8000 --directory examples/portfolio` and open localhost:8000. Run `python tools/browser_audit.py` to check the actual application. See the [repository guide](../../README.md) and [data scope](../../PROVENANCE.md).
