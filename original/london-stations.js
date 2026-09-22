/**
 * Comprehensive London station zone data for commute cost calculation.
 * Covers: London Underground, DLR, Elizabeth Line, London Overground (Zones 1-6+).
 * Sources: TfL Unified API, Wikipedia zone lists, TfL fare data (March 2026).
 *
 * Zone format: array of zone numbers the station sits in.
 *   - Single zone: [2]
 *   - Boundary:    [1, 2]  (fare uses whichever is cheapest for the journey)
 *
 * Mode key: "tube" | "dlr" | "elizabeth" | "overground"
 * A station can appear on multiple modes — the zone is the same regardless.
 */

const LONDON_STATIONS = {
  // ──────────────────────────────────────────
  // ZONE 1
  // ──────────────────────────────────────────
  "Aldgate":                        { zone: [1], modes: ["tube"] },
  "Aldgate East":                   { zone: [1], modes: ["tube"] },
  "Angel":                          { zone: [1], modes: ["tube"] },
  "Baker Street":                   { zone: [1], modes: ["tube"] },
  "Bank":                           { zone: [1], modes: ["tube", "dlr"] },
  "Barbican":                       { zone: [1], modes: ["tube"] },
  "Battersea Power Station":        { zone: [1], modes: ["tube"] },
  "Bayswater":                      { zone: [1], modes: ["tube"] },
  "Blackfriars":                    { zone: [1], modes: ["tube"] },
  "Bond Street":                    { zone: [1], modes: ["tube", "elizabeth"] },
  "Borough":                        { zone: [1], modes: ["tube"] },
  "Cannon Street":                  { zone: [1], modes: ["tube"] },
  "Chancery Lane":                  { zone: [1], modes: ["tube"] },
  "Charing Cross":                  { zone: [1], modes: ["tube"] },
  "Covent Garden":                  { zone: [1], modes: ["tube"] },
  "Edgware Road (Bakerloo)":        { zone: [1], modes: ["tube"] },
  "Edgware Road (Circle)":          { zone: [1], modes: ["tube"] },
  "Embankment":                     { zone: [1], modes: ["tube"] },
  "Euston":                         { zone: [1], modes: ["tube"] },
  "Euston Square":                  { zone: [1], modes: ["tube"] },
  "Farringdon":                     { zone: [1], modes: ["tube", "elizabeth"] },
  "Gloucester Road":                { zone: [1], modes: ["tube"] },
  "Goodge Street":                  { zone: [1], modes: ["tube"] },
  "Great Portland Street":          { zone: [1], modes: ["tube"] },
  "Green Park":                     { zone: [1], modes: ["tube"] },
  "High Street Kensington":         { zone: [1], modes: ["tube"] },
  "Holborn":                        { zone: [1], modes: ["tube"] },
  "Hyde Park Corner":               { zone: [1], modes: ["tube"] },
  "Kennington":                     { zone: [1], modes: ["tube"] },
  "King's Cross St Pancras":        { zone: [1], modes: ["tube"] },
  "Knightsbridge":                  { zone: [1], modes: ["tube"] },
  "Lambeth North":                  { zone: [1], modes: ["tube"] },
  "Lancaster Gate":                 { zone: [1], modes: ["tube"] },
  "Leicester Square":               { zone: [1], modes: ["tube"] },
  "Liverpool Street":               { zone: [1], modes: ["tube", "elizabeth", "overground"] },
  "London Bridge":                  { zone: [1], modes: ["tube"] },
  "Mansion House":                  { zone: [1], modes: ["tube"] },
  "Marble Arch":                    { zone: [1], modes: ["tube"] },
  "Marylebone":                     { zone: [1], modes: ["tube"] },
  "Monument":                       { zone: [1], modes: ["tube"] },
  "Moorgate":                       { zone: [1], modes: ["tube"] },
  "Nine Elms":                      { zone: [1], modes: ["tube"] },
  "Notting Hill Gate":              { zone: [1], modes: ["tube"] },
  "Old Street":                     { zone: [1], modes: ["tube"] },
  "Oxford Circus":                  { zone: [1], modes: ["tube"] },
  "Paddington":                     { zone: [1], modes: ["tube", "elizabeth"] },
  "Piccadilly Circus":              { zone: [1], modes: ["tube"] },
  "Pimlico":                        { zone: [1], modes: ["tube"] },
  "Queensway":                      { zone: [1], modes: ["tube"] },
  "Regent's Park":                  { zone: [1], modes: ["tube"] },
  "Russell Square":                 { zone: [1], modes: ["tube"] },
  "Sloane Square":                  { zone: [1], modes: ["tube"] },
  "South Kensington":               { zone: [1], modes: ["tube"] },
  "Southwark":                      { zone: [1], modes: ["tube"] },
  "St James's Park":                { zone: [1], modes: ["tube"] },
  "St Paul's":                      { zone: [1], modes: ["tube"] },
  "Temple":                         { zone: [1], modes: ["tube"] },
  "Tottenham Court Road":           { zone: [1], modes: ["tube", "elizabeth"] },
  "Tower Gateway":                  { zone: [1], modes: ["dlr"] },
  "Tower Hill":                     { zone: [1], modes: ["tube"] },
  "Vauxhall":                       { zone: [1], modes: ["tube"] },
  "Victoria":                       { zone: [1], modes: ["tube"] },
  "Warren Street":                  { zone: [1], modes: ["tube"] },
  "Waterloo":                       { zone: [1], modes: ["tube"] },
  "Westminster":                    { zone: [1], modes: ["tube"] },

  // Zone 1 Overground
  "Hoxton":                         { zone: [1, 2], modes: ["overground"] },
  "Shoreditch High Street":         { zone: [1, 2], modes: ["overground"] },

  // ──────────────────────────────────────────
  // ZONE 1/2 BOUNDARY
  // ──────────────────────────────────────────
  "Earl's Court":                   { zone: [1, 2], modes: ["tube"] },
  "Elephant & Castle":              { zone: [1, 2], modes: ["tube"] },

  // ──────────────────────────────────────────
  // ZONE 2
  // ──────────────────────────────────────────
  "Arsenal":                        { zone: [2], modes: ["tube"] },
  "Barons Court":                   { zone: [2], modes: ["tube"] },
  "Belsize Park":                   { zone: [2], modes: ["tube"] },
  "Bermondsey":                     { zone: [2], modes: ["tube"] },
  "Bethnal Green":                  { zone: [2], modes: ["tube", "overground"] },
  "Bow Road":                       { zone: [2], modes: ["tube"] },
  "Brixton":                        { zone: [2], modes: ["tube"] },
  "Caledonian Road":                { zone: [2], modes: ["tube"] },
  "Camden Town":                    { zone: [2], modes: ["tube"] },
  "Canada Water":                   { zone: [2], modes: ["tube", "overground"] },
  "Canary Wharf":                   { zone: [2], modes: ["tube", "dlr", "elizabeth"] },
  "Chalk Farm":                     { zone: [2], modes: ["tube"] },
  "Clapham Common":                 { zone: [2], modes: ["tube"] },
  "Clapham North":                  { zone: [2], modes: ["tube"] },
  "East Acton":                     { zone: [2], modes: ["tube"] },
  "Finchley Road":                  { zone: [2], modes: ["tube"] },
  "Finsbury Park":                  { zone: [2], modes: ["tube"] },
  "Fulham Broadway":                { zone: [2], modes: ["tube"] },
  "Goldhawk Road":                  { zone: [2], modes: ["tube"] },
  "Hammersmith":                    { zone: [2], modes: ["tube"] },
  "Highbury & Islington":           { zone: [2], modes: ["tube", "overground"] },
  "Holland Park":                   { zone: [2], modes: ["tube"] },
  "Holloway Road":                  { zone: [2], modes: ["tube"] },
  "Kensal Green":                   { zone: [2], modes: ["tube", "overground"] },
  "Kentish Town":                   { zone: [2], modes: ["tube"] },
  "Kilburn":                        { zone: [2], modes: ["tube"] },
  "Kilburn Park":                   { zone: [2], modes: ["tube"] },
  "Ladbroke Grove":                 { zone: [2], modes: ["tube"] },
  "Latimer Road":                   { zone: [2], modes: ["tube"] },
  "Maida Vale":                     { zone: [2], modes: ["tube"] },
  "Mile End":                       { zone: [2], modes: ["tube"] },
  "Mornington Crescent":            { zone: [2], modes: ["tube"] },
  "North Acton":                    { zone: [2], modes: ["tube"] },
  "Oval":                           { zone: [2], modes: ["tube"] },
  "Parsons Green":                  { zone: [2], modes: ["tube"] },
  "Putney Bridge":                  { zone: [2], modes: ["tube"] },
  "Queen's Park":                   { zone: [2], modes: ["tube", "overground"] },
  "Ravenscourt Park":               { zone: [2], modes: ["tube"] },
  "Royal Oak":                      { zone: [2], modes: ["tube"] },
  "St John's Wood":                 { zone: [2], modes: ["tube"] },
  "Shepherd's Bush":                { zone: [2], modes: ["tube", "overground"] },
  "Shepherd's Bush Market":         { zone: [2], modes: ["tube"] },
  "Stamford Brook":                 { zone: [2], modes: ["tube"] },
  "Stepney Green":                  { zone: [2], modes: ["tube"] },
  "Stockwell":                      { zone: [2], modes: ["tube"] },
  "Swiss Cottage":                  { zone: [2], modes: ["tube"] },
  "Tufnell Park":                   { zone: [2], modes: ["tube"] },
  "Turnham Green":                  { zone: [2, 3], modes: ["tube"] },
  "Warwick Avenue":                 { zone: [2], modes: ["tube"] },
  "West Brompton":                  { zone: [2], modes: ["tube", "overground"] },
  "West Hampstead":                 { zone: [2], modes: ["tube", "overground"] },
  "West Kensington":                { zone: [2], modes: ["tube"] },
  "Westbourne Park":                { zone: [2], modes: ["tube"] },
  "Whitechapel":                    { zone: [2], modes: ["tube", "elizabeth"] },
  "White City":                     { zone: [2], modes: ["tube"] },
  "Willesden Green":                { zone: [2], modes: ["tube"] },
  "Wood Lane":                      { zone: [2], modes: ["tube"] },
  "Manor House":                    { zone: [2, 3], modes: ["tube"] },

  // Zone 2 DLR
  "All Saints":                     { zone: [2], modes: ["dlr"] },
  "Blackwall":                      { zone: [2], modes: ["dlr"] },
  "Bow Church":                     { zone: [2], modes: ["dlr"] },
  "Crossharbour":                   { zone: [2], modes: ["dlr"] },
  "Devons Road":                    { zone: [2], modes: ["dlr"] },
  "Heron Quays":                    { zone: [2], modes: ["dlr"] },
  "Island Gardens":                 { zone: [2], modes: ["dlr"] },
  "Langdon Park":                   { zone: [2], modes: ["dlr"] },
  "Limehouse":                      { zone: [2], modes: ["dlr"] },
  "Mudchute":                       { zone: [2], modes: ["dlr"] },
  "Poplar":                         { zone: [2], modes: ["dlr"] },
  "South Quay":                     { zone: [2], modes: ["dlr"] },
  "West India Quay":                { zone: [2], modes: ["dlr"] },
  "Westferry":                      { zone: [2], modes: ["dlr"] },

  // Zone 2 Overground
  "Brondesbury":                    { zone: [2], modes: ["overground"] },
  "Brondesbury Park":               { zone: [2], modes: ["overground"] },
  "Brockley":                       { zone: [2], modes: ["overground"] },
  "Caledonian Road & Barnsbury":    { zone: [2], modes: ["overground"] },
  "Cambridge Heath":                { zone: [2], modes: ["overground"] },
  "Camden Road":                    { zone: [2], modes: ["overground"] },
  "Canonbury":                      { zone: [2], modes: ["overground"] },
  "Clapham High Street":            { zone: [2], modes: ["overground"] },
  "Clapham Junction":               { zone: [2], modes: ["overground"] },
  "Dalston Junction":               { zone: [2], modes: ["overground"] },
  "Dalston Kingsland":              { zone: [2], modes: ["overground"] },
  "Denmark Hill":                   { zone: [2], modes: ["overground"] },
  "Drayton Park":                   { zone: [2], modes: ["overground"] },
  "Finchley Road & Frognal":        { zone: [2], modes: ["overground"] },
  "Gospel Oak":                     { zone: [2], modes: ["overground"] },
  "Hackney Central":                { zone: [2], modes: ["overground"] },
  "Hackney Downs":                  { zone: [2], modes: ["overground"] },
  "Hackney Wick":                   { zone: [2], modes: ["overground"] },
  "Haggerston":                     { zone: [2], modes: ["overground"] },
  "Hampstead Heath":                { zone: [2], modes: ["overground"] },
  "Homerton":                       { zone: [2], modes: ["overground"] },
  "Imperial Wharf":                 { zone: [2], modes: ["overground"] },
  "Kensington Olympia":             { zone: [2], modes: ["overground"] },
  "Kensal Rise":                    { zone: [2], modes: ["overground"] },
  "Kentish Town West":              { zone: [2], modes: ["overground"] },
  "Kilburn High Road":              { zone: [2], modes: ["overground"] },
  "London Fields":                  { zone: [2], modes: ["overground"] },
  "New Cross Gate":                 { zone: [2], modes: ["overground"] },
  "Peckham Rye":                    { zone: [2], modes: ["overground"] },
  "Queens Road Peckham":            { zone: [2], modes: ["overground"] },
  "Rectory Road":                   { zone: [2], modes: ["overground"] },
  "Rotherhithe":                    { zone: [2], modes: ["overground"] },
  "Shadwell":                       { zone: [2], modes: ["overground", "dlr"] },
  "South Hampstead":                { zone: [2], modes: ["overground"] },
  "Stoke Newington":                { zone: [2], modes: ["overground"] },
  "Surrey Quays":                   { zone: [2], modes: ["overground"] },
  "Upper Holloway":                 { zone: [2], modes: ["overground"] },
  "Wapping":                        { zone: [2], modes: ["overground"] },
  "Wandsworth Road":                { zone: [2], modes: ["overground"] },

  // ──────────────────────────────────────────
  // ZONE 2/3 BOUNDARY
  // ──────────────────────────────────────────
  "Archway":                        { zone: [2, 3], modes: ["tube"] },
  "Bromley-by-Bow":                 { zone: [2, 3], modes: ["tube"] },
  "Clapham South":                  { zone: [2, 3], modes: ["tube"] },
  "East Putney":                    { zone: [2, 3], modes: ["tube"] },
  "Hampstead":                      { zone: [2, 3], modes: ["tube"] },
  "Willesden Junction":             { zone: [2, 3], modes: ["tube", "overground"] },

  // Zone 2/3 DLR
  "Abbey Road":                     { zone: [2, 3], modes: ["dlr"] },
  "Canning Town":                   { zone: [2, 3], modes: ["tube", "dlr"] },
  "Cutty Sark":                     { zone: [2, 3], modes: ["dlr"] },
  "Deptford Bridge":                { zone: [2, 3], modes: ["dlr"] },
  "East India":                     { zone: [2, 3], modes: ["dlr"] },
  "Elverson Road":                  { zone: [2, 3], modes: ["dlr"] },
  "Greenwich":                      { zone: [2, 3], modes: ["dlr"] },
  "Lewisham":                       { zone: [2, 3], modes: ["dlr"] },
  "Pudding Mill Lane":              { zone: [2, 3], modes: ["dlr"] },
  "Star Lane":                      { zone: [2, 3], modes: ["dlr"] },
  "Stratford High Street":          { zone: [2, 3], modes: ["dlr"] },

  // Zone 2/3 Overground
  "Clapton":                        { zone: [2, 3], modes: ["overground"] },

  // ──────────────────────────────────────────
  // ZONE 3
  // ──────────────────────────────────────────
  "Acton Town":                     { zone: [3], modes: ["tube"] },
  "Balham":                         { zone: [3], modes: ["tube"] },
  "Blackhorse Road":                { zone: [3], modes: ["tube", "overground"] },
  "Brent Cross":                    { zone: [3], modes: ["tube"] },
  "Chiswick Park":                  { zone: [3], modes: ["tube"] },
  "Colliers Wood":                  { zone: [3], modes: ["tube"] },
  "Dollis Hill":                    { zone: [3], modes: ["tube"] },
  "Ealing Broadway":                { zone: [3], modes: ["tube", "elizabeth"] },
  "Ealing Common":                  { zone: [3], modes: ["tube"] },
  "East Finchley":                  { zone: [3], modes: ["tube"] },
  "Golders Green":                  { zone: [3], modes: ["tube"] },
  "Gunnersbury":                    { zone: [3], modes: ["tube", "overground"] },
  "Hanger Lane":                    { zone: [3], modes: ["tube"] },
  "Harlesden":                      { zone: [3], modes: ["tube", "overground"] },
  "Highgate":                       { zone: [3], modes: ["tube"] },
  "Leyton":                         { zone: [3], modes: ["tube"] },
  "Neasden":                        { zone: [3], modes: ["tube"] },
  "North Ealing":                   { zone: [3], modes: ["tube"] },
  "North Greenwich":                { zone: [2, 3], modes: ["tube"] },
  "Northfields":                    { zone: [3], modes: ["tube"] },
  "Park Royal":                     { zone: [3], modes: ["tube"] },
  "Plaistow":                       { zone: [3], modes: ["tube"] },
  "Seven Sisters":                  { zone: [3], modes: ["tube", "overground"] },
  "South Ealing":                   { zone: [3], modes: ["tube"] },
  "South Wimbledon":                { zone: [3, 4], modes: ["tube"] },
  "Southfields":                    { zone: [3], modes: ["tube"] },
  "Stonebridge Park":               { zone: [3], modes: ["tube", "overground"] },
  "Stratford":                      { zone: [2, 3], modes: ["tube", "dlr", "elizabeth", "overground"] },
  "Tooting Bec":                    { zone: [3], modes: ["tube"] },
  "Tooting Broadway":               { zone: [3], modes: ["tube"] },
  "Totteridge & Whetstone":         { zone: [4], modes: ["tube"] },
  "Turnpike Lane":                  { zone: [3], modes: ["tube"] },
  "Upton Park":                     { zone: [3], modes: ["tube"] },
  "Walthamstow Central":            { zone: [3], modes: ["tube", "overground"] },
  "West Acton":                     { zone: [3], modes: ["tube"] },
  "West Ham":                       { zone: [2, 3], modes: ["tube", "dlr"] },
  "Wimbledon":                      { zone: [3], modes: ["tube"] },
  "Wimbledon Park":                 { zone: [3], modes: ["tube"] },
  "Wood Green":                     { zone: [3], modes: ["tube"] },

  // Zone 3 DLR
  "Beckton":                        { zone: [3], modes: ["dlr"] },
  "Beckton Park":                   { zone: [3], modes: ["dlr"] },
  "Custom House":                   { zone: [3], modes: ["dlr", "elizabeth"] },
  "Cyprus":                         { zone: [3], modes: ["dlr"] },
  "Gallions Reach":                 { zone: [3], modes: ["dlr"] },
  "King George V":                  { zone: [3], modes: ["dlr"] },
  "London City Airport":            { zone: [3], modes: ["dlr"] },
  "Pontoon Dock":                   { zone: [3], modes: ["dlr"] },
  "Prince Regent":                  { zone: [3], modes: ["dlr"] },
  "Royal Albert":                   { zone: [3], modes: ["dlr"] },
  "Royal Victoria":                 { zone: [3], modes: ["dlr"] },

  // Zone 3 Elizabeth Line
  "Acton Main Line":                { zone: [3], modes: ["elizabeth"] },
  "Forest Gate":                    { zone: [3], modes: ["elizabeth"] },
  "Maryland":                       { zone: [3], modes: ["elizabeth"] },
  "Manor Park":                     { zone: [3, 4], modes: ["elizabeth"] },
  "West Ealing":                    { zone: [3], modes: ["elizabeth"] },

  // Zone 3 Overground
  "Acton Central":                  { zone: [3], modes: ["overground"] },
  "Alexandra Palace":               { zone: [3], modes: ["overground"] },
  "Bruce Grove":                    { zone: [3], modes: ["overground"] },
  "Crouch Hill":                    { zone: [3], modes: ["overground"] },
  "Forest Hill":                    { zone: [3], modes: ["overground"] },
  "Harringay Green Lanes":          { zone: [3], modes: ["overground"] },
  "Honor Oak Park":                 { zone: [3], modes: ["overground"] },
  "Leyton Midland Road":            { zone: [3], modes: ["overground"] },
  "Leytonstone High Road":          { zone: [3], modes: ["overground"] },
  "South Tottenham":                { zone: [3], modes: ["overground"] },
  "St James Street":                { zone: [3], modes: ["overground"] },
  "Sydenham":                       { zone: [3], modes: ["overground"] },
  "Walthamstow Queens Road":        { zone: [3], modes: ["overground"] },
  "Wanstead Park":                  { zone: [3], modes: ["overground"] },
  "Richmond":                       { zone: [3, 4], modes: ["tube", "overground"] },
  "Kew Gardens":                    { zone: [3, 4], modes: ["tube", "overground"] },

  // ──────────────────────────────────────────
  // ZONE 3/4 BOUNDARY
  // ──────────────────────────────────────────
  "Bounds Green":                   { zone: [3, 4], modes: ["tube"] },
  "East Ham":                       { zone: [3, 4], modes: ["tube"] },
  "Hendon Central":                 { zone: [3, 4], modes: ["tube"] },
  "Leytonstone":                    { zone: [3, 4], modes: ["tube"] },

  // Zone 3/4 Overground
  "Crystal Palace":                 { zone: [3, 4], modes: ["overground"] },
  "Woodgrange Park":                { zone: [3, 4], modes: ["overground"] },

  // ──────────────────────────────────────────
  // ZONE 4
  // ──────────────────────────────────────────
  "Alperton":                       { zone: [4], modes: ["tube"] },
  "Arnos Grove":                    { zone: [4], modes: ["tube"] },
  "Barking":                        { zone: [4], modes: ["tube", "overground"] },
  "Barkingside":                    { zone: [4], modes: ["tube"] },
  "Boston Manor":                   { zone: [4], modes: ["tube"] },
  "Burnt Oak":                      { zone: [4], modes: ["tube"] },
  "Chigwell":                       { zone: [4], modes: ["tube"] },
  "Colindale":                      { zone: [4], modes: ["tube"] },
  "Fairlop":                        { zone: [4], modes: ["tube"] },
  "Finchley Central":               { zone: [4], modes: ["tube"] },
  "Gants Hill":                     { zone: [4], modes: ["tube"] },
  "Grange Hill":                    { zone: [4], modes: ["tube"] },
  "Greenford":                      { zone: [4], modes: ["tube"] },
  "Hainault":                       { zone: [4], modes: ["tube"] },
  "Hounslow Central":               { zone: [4], modes: ["tube"] },
  "Hounslow East":                  { zone: [4], modes: ["tube"] },
  "Kenton":                         { zone: [4], modes: ["tube", "overground"] },
  "Kingsbury":                      { zone: [4], modes: ["tube"] },
  "Mill Hill East":                 { zone: [4], modes: ["tube"] },
  "Morden":                         { zone: [4], modes: ["tube"] },
  "Newbury Park":                   { zone: [4], modes: ["tube"] },
  "North Wembley":                  { zone: [4], modes: ["tube", "overground"] },
  "Northwick Park":                 { zone: [4], modes: ["tube"] },
  "Osterley":                       { zone: [4], modes: ["tube"] },
  "Perivale":                       { zone: [4], modes: ["tube"] },
  "Preston Road":                   { zone: [4], modes: ["tube"] },
  "Queensbury":                     { zone: [4], modes: ["tube"] },
  "Redbridge":                      { zone: [4], modes: ["tube"] },
  "Roding Valley":                  { zone: [4], modes: ["tube"] },
  "South Kenton":                   { zone: [4], modes: ["tube", "overground"] },
  "South Woodford":                 { zone: [4], modes: ["tube"] },
  "Southgate":                      { zone: [4], modes: ["tube"] },
  "Sudbury Hill":                   { zone: [4], modes: ["tube"] },
  "Sudbury Town":                   { zone: [4], modes: ["tube"] },
  "Upney":                          { zone: [4], modes: ["tube"] },
  "Wanstead":                       { zone: [4], modes: ["tube"] },
  "Wembley Central":                { zone: [4], modes: ["tube", "overground"] },
  "Wembley Park":                   { zone: [4], modes: ["tube"] },
  "West Finchley":                  { zone: [4], modes: ["tube"] },
  "Woodford":                       { zone: [4], modes: ["tube"] },
  "Woodside Park":                  { zone: [4], modes: ["tube"] },

  // Zone 4 DLR/Elizabeth
  "Abbey Wood":                     { zone: [4], modes: ["elizabeth"] },
  "Goodmayes":                      { zone: [4], modes: ["elizabeth"] },
  "Hanwell":                        { zone: [4], modes: ["elizabeth"] },
  "Ilford":                         { zone: [4], modes: ["elizabeth"] },
  "Seven Kings":                    { zone: [4], modes: ["elizabeth"] },
  "Southall":                       { zone: [4], modes: ["elizabeth"] },
  "Woolwich":                       { zone: [4], modes: ["elizabeth"] },

  // Zone 4 Overground
  "Barking Riverside":              { zone: [4], modes: ["overground"] },
  "Edmonton Green":                 { zone: [4], modes: ["overground"] },
  "Highams Park":                   { zone: [4], modes: ["overground"] },
  "Norwood Junction":               { zone: [4], modes: ["overground"] },
  "Silver Street":                  { zone: [4], modes: ["overground"] },
  "Wood Street":                    { zone: [4], modes: ["overground"] },
  "Anerley":                        { zone: [4], modes: ["overground"] },
  "Penge West":                     { zone: [4], modes: ["overground"] },

  // ──────────────────────────────────────────
  // ZONE 4/5 BOUNDARY
  // ──────────────────────────────────────────
  "Upminster Bridge":               { zone: [4, 5], modes: ["tube"] },

  // ──────────────────────────────────────────
  // ZONE 5
  // ──────────────────────────────────────────
  "Becontree":                      { zone: [5], modes: ["tube"] },
  "Buckhurst Hill":                 { zone: [5], modes: ["tube"] },
  "Canons Park":                    { zone: [5], modes: ["tube"] },
  "Cockfosters":                    { zone: [5], modes: ["tube"] },
  "Dagenham East":                  { zone: [5], modes: ["tube"] },
  "Dagenham Heathway":              { zone: [5], modes: ["tube"] },
  "Eastcote":                       { zone: [5], modes: ["tube"] },
  "Edgware":                        { zone: [5], modes: ["tube"] },
  "Harrow & Wealdstone":            { zone: [5], modes: ["tube", "overground"] },
  "Harrow-on-the-Hill":             { zone: [5], modes: ["tube"] },
  "High Barnet":                    { zone: [5], modes: ["tube"] },
  "Hounslow West":                  { zone: [5], modes: ["tube"] },
  "North Harrow":                   { zone: [5], modes: ["tube"] },
  "Northolt":                       { zone: [5], modes: ["tube"] },
  "Oakwood":                        { zone: [5], modes: ["tube"] },
  "Pinner":                         { zone: [5], modes: ["tube"] },
  "Rayners Lane":                   { zone: [5], modes: ["tube"] },
  "Ruislip Gardens":                { zone: [5], modes: ["tube"] },
  "South Harrow":                   { zone: [5], modes: ["tube"] },
  "South Ruislip":                  { zone: [5], modes: ["tube"] },
  "Stanmore":                       { zone: [5], modes: ["tube"] },
  "Upminster":                      { zone: [5, 6], modes: ["tube"] },
  "West Harrow":                    { zone: [5], modes: ["tube"] },

  // Zone 5 Elizabeth Line
  "Chadwell Heath":                 { zone: [5], modes: ["elizabeth"] },
  "Hayes & Harlington":             { zone: [5], modes: ["elizabeth"] },

  // Zone 5 Overground
  "Bush Hill Park":                 { zone: [5], modes: ["overground"] },
  "Chingford":                      { zone: [5], modes: ["overground"] },
  "Enfield Town":                   { zone: [5], modes: ["overground"] },
  "Headstone Lane":                 { zone: [5], modes: ["overground"] },
  "Southbury":                      { zone: [5], modes: ["overground"] },
  "West Croydon":                   { zone: [5], modes: ["overground"] },

  // ──────────────────────────────────────────
  // ZONE 5/6 BOUNDARY
  // ──────────────────────────────────────────
  "Hatton Cross":                   { zone: [5, 6], modes: ["tube"] },

  // ──────────────────────────────────────────
  // ZONE 6
  // ──────────────────────────────────────────
  "Debden":                         { zone: [6], modes: ["tube"] },
  "Elm Park":                       { zone: [6], modes: ["tube"] },
  "Epping":                         { zone: [6], modes: ["tube"] },
  "Hillingdon":                     { zone: [6], modes: ["tube"] },
  "Hornchurch":                     { zone: [6], modes: ["tube"] },
  "Ickenham":                       { zone: [6], modes: ["tube"] },
  "Loughton":                       { zone: [6], modes: ["tube"] },
  "Moor Park":                      { zone: [6], modes: ["tube"] },
  "Northwood":                      { zone: [6], modes: ["tube"] },
  "Northwood Hills":                { zone: [6], modes: ["tube"] },
  "Ruislip":                        { zone: [6], modes: ["tube"] },
  "Ruislip Manor":                  { zone: [6], modes: ["tube"] },
  "Uxbridge":                       { zone: [6], modes: ["tube"] },
  "West Ruislip":                   { zone: [6], modes: ["tube"] },
  "Heathrow Terminals 2 & 3":       { zone: [6], modes: ["tube", "elizabeth"] },
  "Heathrow Terminal 4":            { zone: [6], modes: ["tube", "elizabeth"] },
  "Heathrow Terminal 5":            { zone: [6], modes: ["tube", "elizabeth"] },

  // Zone 6 Elizabeth Line
  "Gidea Park":                     { zone: [6], modes: ["elizabeth"] },
  "Harold Wood":                    { zone: [6], modes: ["elizabeth"] },
  "Romford":                        { zone: [6], modes: ["elizabeth", "overground"] },
  "West Drayton":                   { zone: [6], modes: ["elizabeth"] },

  // Zone 6 Overground
  "Emerson Park":                   { zone: [6], modes: ["overground"] },
  "Hatch End":                      { zone: [6], modes: ["overground"] },
  "Turkey Street":                  { zone: [6], modes: ["overground"] },

  // ──────────────────────────────────────────
  // ZONE 7+ (Metropolitan line outer, Overground)
  // ──────────────────────────────────────────
  "Croxley":                        { zone: [7], modes: ["tube"] },
  "Rickmansworth":                   { zone: [7], modes: ["tube"] },
  "Chorleywood":                    { zone: [7], modes: ["tube"] },
  "Watford":                        { zone: [7], modes: ["tube"] },
  "Chalfont & Latimer":             { zone: [8], modes: ["tube"] },
  "Chesham":                        { zone: [9], modes: ["tube"] },
  "Amersham":                       { zone: [9], modes: ["tube"] },
  "Carpenders Park":                { zone: [7], modes: ["overground"] },
  "Bushey":                         { zone: [8], modes: ["overground"] },
  "Watford High Street":            { zone: [8], modes: ["overground"] },
  "Watford Junction":               { zone: [8], modes: ["overground"] },
  "Cheshunt":                       { zone: [8], modes: ["overground"] },

  // ──────────────────────────────────────────
  // MISSING STATIONS (various zones)
  // ──────────────────────────────────────────
  "Tottenham Hale":                 { zone: [3], modes: ["tube", "overground"] },
  "Theydon Bois":                   { zone: [6], modes: ["tube"] },
  "Snaresbrook":                    { zone: [4], modes: ["tube"] },
  "Woolwich Arsenal":               { zone: [4], modes: ["dlr"] },
};


// ─── FARE TABLES (March 2026) ─────────────────────────────
// Source: tfl.gov.uk/fares & toptiplondon.com
const TFL_FARES = {
  // Pay-as-you-go single fares (Oyster / Contactless)
  single: {
    // Key format: "minZone-maxZone"
    "1":   { peak: 3.10, offPeak: 3.00 },
    "1-2": { peak: 3.60, offPeak: 3.10 },
    "1-3": { peak: 3.90, offPeak: 3.30 },
    "1-4": { peak: 4.80, offPeak: 3.60 },
    "1-5": { peak: 5.30, offPeak: 3.80 },
    "1-6": { peak: 5.90, offPeak: 4.00 },
    "2":   { peak: 2.30, offPeak: 2.20 },
    "2-3": { peak: 2.50, offPeak: 2.30 },
    "2-4": { peak: 3.20, offPeak: 2.40 },
    "2-5": { peak: 3.40, offPeak: 2.50 },
    "2-6": { peak: 3.80, offPeak: 2.60 },
    "3":   { peak: 2.30, offPeak: 2.20 },
    "3-4": { peak: 2.50, offPeak: 2.30 },
    "3-5": { peak: 3.20, offPeak: 2.40 },
    "3-6": { peak: 3.40, offPeak: 2.50 },
    "4":   { peak: 2.10, offPeak: 2.20 },
    "4-5": { peak: 2.30, offPeak: 2.30 },
    "4-6": { peak: 3.20, offPeak: 2.40 },
    "5":   { peak: 2.30, offPeak: 2.20 },
    "5-6": { peak: 2.50, offPeak: 2.30 },
    "6":   { peak: 2.30, offPeak: 2.20 },
  },

  // Daily caps
  dailyCap: {
    "1":   8.90,
    "1-2": 8.90,
    "1-3": 10.60,
    "1-4": 13.00,
    "1-5": 15.40,
    "1-6": 16.30,
    "2":   8.90,
    "2-3": 8.90,
    "2-4": 10.60,
    "2-5": 13.00,
    "2-6": 15.40,
    "3":   8.90,
    "3-4": 8.90,
    "3-5": 10.60,
    "3-6": 13.00,
    "4":   8.90,
    "4-5": 8.90,
    "4-6": 10.60,
    "5":   8.90,
    "5-6": 8.90,
    "6":   8.90,
  },

  // Weekly caps (contactless Monday-Sunday auto-capping)
  weeklyCap: {
    "1":   44.70,
    "1-2": 44.70,
    "1-3": 52.50,
    "1-4": 64.20,
    "1-5": 76.40,
    "1-6": 81.60,
    "2":   29.10,
    "2-3": 29.10,
    "2-4": 37.80,
    "2-5": 47.00,
    "2-6": 52.50,
    "3":   29.10,
    "3-4": 29.10,
    "3-5": 37.80,
    "3-6": 47.00,
    "4":   29.10,
    "4-5": 29.10,
    "4-6": 37.80,
    "5":   29.10,
    "5-6": 29.10,
    "6":   29.10,
  },

  // Travelcard prices
  travelcard: {
    weekly: {
      "1-2": 44.70, "1-3": 52.50, "1-4": 64.20, "1-5": 76.40, "1-6": 81.60,
      "2-3": 29.10, "2-4": 37.80, "2-5": 47.00, "2-6": 52.50,
      "3-4": 29.10, "3-5": 37.80, "3-6": 47.00,
      "4-5": 29.10, "4-6": 37.80,
      "5-6": 29.10,
    },
    monthly: {
      "1-2": 171.70, "1-3": 201.50, "1-4": 246.60, "1-5": 293.50, "1-6": 313.50,
    },
    annual: {
      "1-2": 1788, "1-3": 2100, "1-4": 2568, "1-5": 3060, "1-6": 3264,
    },
  },

  bus: {
    single: 1.75,
    dailyCap: 5.25,
    weeklyCap: 24.70,
  },
};


// ─── ZONE CALCULATION LOGIC ──────────────────────────────

/**
 * Get the zone(s) for a station. Returns array like [1] or [2,3].
 */
function getStationZones(stationName) {
  const s = LONDON_STATIONS[stationName];
  return s ? s.zone : null;
}

/**
 * Determine the fare zone key for a journey between two stations.
 *
 * TfL RULES:
 * 1. The fare is based on the lowest and highest zone numbers traversed.
 * 2. Boundary stations can be treated as either zone for fare purposes.
 *    The system always picks whichever zone gives the cheapest fare.
 * 3. For Zone 1 boundary: if both stations are outside Zone 1, and the
 *    physical route doesn't require Zone 1, you can avoid Zone 1 fares
 *    (e.g., using pink card readers at interchanges).
 * 4. Heathrow always charges peak fare regardless of time.
 *
 * Returns: { zoneKey: "1-4", minZone: 1, maxZone: 4, zonesTraversed: [1,2,3,4] }
 */
function calculateJourneyZones(fromStation, toStation) {
  const fromZones = getStationZones(fromStation);
  const toZones = getStationZones(toStation);

  if (!fromZones || !toZones) return null;

  // Try all combinations of from-zone and to-zone, pick cheapest
  let bestMin = 99, bestMax = 99, bestSpan = 99;

  for (const fz of fromZones) {
    for (const tz of toZones) {
      const lo = Math.min(fz, tz);
      const hi = Math.max(fz, tz);
      const span = hi - lo;
      // Prefer fewer zones (cheaper), then prefer lower zone numbers
      if (span < bestSpan || (span === bestSpan && lo < bestMin)) {
        bestMin = lo;
        bestMax = hi;
        bestSpan = span;
      }
    }
  }

  // Build the zone key for fare lookup
  let zoneKey;
  if (bestMin === bestMax) {
    zoneKey = String(bestMin);
  } else {
    zoneKey = `${bestMin}-${bestMax}`;
  }

  // All zones traversed
  const zonesTraversed = [];
  for (let z = bestMin; z <= bestMax; z++) {
    zonesTraversed.push(z);
  }

  return {
    zoneKey,
    minZone: bestMin,
    maxZone: bestMax,
    zonesTraversed,
  };
}

/**
 * Look up the single fare for a journey.
 * Returns { peak, offPeak } or null.
 */
function getJourneyFare(fromStation, toStation) {
  const journey = calculateJourneyZones(fromStation, toStation);
  if (!journey) return null;

  const fare = TFL_FARES.single[journey.zoneKey];
  if (!fare) return null;

  // Heathrow surcharge: always peak
  const isHeathrow = [fromStation, toStation].some(s =>
    s.toLowerCase().includes("heathrow")
  );

  return {
    ...journey,
    peak: fare.peak,
    offPeak: isHeathrow ? fare.peak : fare.offPeak,
    isHeathrow,
  };
}

/**
 * Get all station names sorted alphabetically, optionally filtered by mode.
 */
function getStationList(modeFilter) {
  let names = Object.keys(LONDON_STATIONS);
  if (modeFilter) {
    names = names.filter(n =>
      LONDON_STATIONS[n].modes.includes(modeFilter)
    );
  }
  return names.sort();
}

/**
 * Fuzzy search stations by partial name.
 */
function searchStations(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return Object.keys(LONDON_STATIONS)
    .filter(name => name.toLowerCase().includes(q))
    .sort();
}


// ─── EXPORT (works in browser and Node) ──────────────────
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    LONDON_STATIONS,
    TFL_FARES,
    getStationZones,
    calculateJourneyZones,
    getJourneyFare,
    getStationList,
    searchStations,
  };
}
