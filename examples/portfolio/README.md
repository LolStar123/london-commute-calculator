# commute calculator: working example

Change commute days and fares; compare capped PAYG with a weekly ticket.

**[Open the demo](https://lolstar123.github.io/london-commute-calculator/)** · [Calculation / workflow code](model.mjs) · [Checks](model.test.mjs)

![Example output](preview.png)

## Run it

From the repository root, with Python 3 and Node.js 22:

```sh
python -m http.server 8000 --directory examples/portfolio
```

Open http://localhost:8000. Change an input, or edit the JSON fixture, then export the computed result as JSON or CSV.

```sh
node --test examples/portfolio/model.test.mjs
```

## What it does

Enter your journey and working pattern, then compare ticket costs with daily and weekly caps. The full calculator also handles zones, peak times, Railcards, annual leave and break-even points.

## Scope and source

The mini example uses editable illustrative fares. The full original includes dated fare tables; check current TfL prices before buying.

london-commute/london-commute-optimizer.html and london-stations.js, included under original/.

`model.mjs` is the small public implementation. `app.mjs` connects its inputs and outputs to the browser. No package install or network key is needed to run the example. GitHub Pages runs the same files after the checks pass.
