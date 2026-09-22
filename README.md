# London commute calculator

**[Open the full calculator](https://lolstar123.github.io/london-commute-calculator/)** | [Application source](examples/portfolio/index.html) | [Station database](examples/portfolio/london-stations.js)

The original, complete commute calculator. Choose real London stations, the days and times
you travel, a Railcard and annual leave. Compare PAYG, daily/weekly caps, weekly/monthly/annual
Travelcards, break-even travel days, working-from-home savings and a season-ticket loan.

<img src="examples/portfolio/preview.png" alt="Commute calculator with a populated Stratford to Euston Square journey" width="900">

## Run

```sh
python -m http.server 8000 --directory examples/portfolio
```

Open http://localhost:8000. The complete app runs locally with its 400-plus-station database.
Inputs stay in your browser. Print the result or copy the comparison after changing a journey.

## Fare basis

The bundled fare table is dated March 2026, retained from the original application. It is not
a live fare quotation. Check current TfL fares before buying; exact routes and National Rail
journeys can differ. The default Stratford / Euston Square journey is a starting example,
not a claim about Atul's commute.

The old five-input demonstration has been replaced by the actual application.
