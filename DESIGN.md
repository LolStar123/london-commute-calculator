# London commute calculator

The calculator compares payment methods for a regular home-to-work-to-home journey. Both travel times belong in the first view because each leg changes peak pricing.

## Direction and references

The existing calculator and its real station search are the functional reference. A return ticket supplies the signature: paired endpoints, a home/work/home route trace and a perforated separation between journey inputs and fare decision. The previous demo was inspected: fields and results were stacked in a long single column, and the alternatives looked actionable despite linking to a hidden table.

```
London commute calculator / dated fare basis
Return journey ticket | Best payment / daily and annual estimate
Stations / days      | Outbound + return fare
Both travel times    | Two closest alternatives
Compare fares        | Calculation assumptions
```

## Tokens

- Ground `#121b1b`, ticket `#1b2927`, result `#202f2a`, rule `#3c514a`, text `#f0f0e6`, secondary `#b0beb6`, accent `#a9cfaf`.
- Display: local Georgia, 42-52px. Controls/body: local Segoe UI, 14-16px. Prices: local Georgia, 34-48px. No downloaded fonts.
- 1080px width, 28px gutter. At 900px the planner and decision stack. At 500px station fields stack while departure/return remain paired.
- A code-native three-stop route trace is the only decoration. It encodes the actual return workflow. 12px outer ticket radius and dashed internal rules evoke ticket stock without fake barcode data.
- 48px inputs, obvious keyboard focus, readable autocomplete zones and active options. Results use static alternative rows, not fake buttons.

## Behaviour and acceptance

Preserve station records, March 2026 fare tables, zone handling, two trips per day, annual leave and cap/pass calculations. The fare basis remains visibly dated. Show both legs' peak status and PAYG fare even when a pass is cheapest. Explain the annual comparison's 5.6-week leave assumption in a compact note.

Acceptance: default Stratford/Euston Square journey, days and return-time recalculation, swap, valid/invalid station search, autocomplete keyboard selection, no JavaScript errors, 1280px/390px overflow/focus, reduced-motion scrolling and screenshots. Three bounded review passes: function, system, craft.

## Copy audit

Named emotions and marketing claims: none. Rejected: "unlock savings", "smart commute", "effortless planning". Exact route fares and National Rail exceptions remain uncertain because this is a bundled zone estimate. Narrative sensory/cost/irrelevant-detail quotas do not fit this reference README or interface; factual clarity takes priority.

## Completed review

Function, design-system and visual-craft passes completed at 1280px and 390px in isolated Chrome. Main controls, invalid inputs, visible focus and reduced motion were checked; screenshots were opened and inspected. The repository guide uses the actual implementation and names its data limits. Full audit records, state screenshots, copy audit and metadata proposals are kept in ignored `output/qa/`.
