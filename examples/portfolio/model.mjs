export const defaults = {
  days: 3,
  single: 3.5,
  dailyCap: 9,
  weeklyCap: 44,
  travelcard: 47,
};
export const controls = [
  {
    key: "days",
    label: "Commute days per week",
    type: "number",
    min: 0,
    max: 7,
    step: 1,
  },
  {
    key: "single",
    label: "Single journey (£)",
    type: "number",
    min: 0,
    max: 30,
    step: 0.1,
  },
  {
    key: "dailyCap",
    label: "Daily cap (£)",
    type: "number",
    min: 0,
    max: 100,
    step: 0.1,
  },
  {
    key: "weeklyCap",
    label: "Weekly cap (£)",
    type: "number",
    min: 0,
    max: 200,
    step: 0.1,
  },
  {
    key: "travelcard",
    label: "Weekly Travelcard (£)",
    type: "number",
    min: 0,
    max: 200,
    step: 0.1,
  },
];
export function cost(i) {
  if (
    !Number.isInteger(i.days) ||
    i.days < 0 ||
    i.days > 7 ||
    Object.values(i).some((v) => !Number.isFinite(v) || v < 0)
  )
    throw Error("Use 0-7 whole days and nonnegative fares.");
  const raw = i.days * 2 * i.single,
    daily = i.days * Math.min(2 * i.single, i.dailyCap),
    payg = Math.min(daily, i.weeklyCap);
  return {
    raw,
    daily,
    payg,
    travelcard: i.travelcard,
    best: Math.min(payg, i.travelcard),
    winner:
      payg === i.travelcard
        ? "tie"
        : payg < i.travelcard
          ? "capped pay-as-you-go"
          : "weekly Travelcard",
  };
}
export function run(i) {
  const r = cost(i);
  return {
    summary: r.winner + " costs least for this week",
    metrics: {
      "cheapest (£)": r.best.toFixed(2),
      "return journeys": i.days,
      "capping saves (£)": (r.raw - r.payg).toFixed(2),
    },
    columns: ["days", "capped PAYG (£)", "weekly ticket (£)", "cheapest"],
    rows: Array.from({ length: 7 }, (_, n) => {
      const c = cost({ ...i, days: n + 1 });
      return [n + 1, c.payg.toFixed(2), i.travelcard.toFixed(2), c.winner];
    }),
    series: Array.from({ length: 8 }, (_, days) => cost({ ...i, days }).payg),
    seriesLabel: "Capped PAYG by commute days (0-7)",
    steps: [
      "Set the days you travel",
      "Price two journeys per day",
      "Apply daily then weekly caps",
      "Compare with the weekly ticket",
    ],
    artifact: r,
  };
}
