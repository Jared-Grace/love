import { g_clock_sky_phase } from "./g_clock_sky_phase.mjs";
import { g_day_clock } from "./g_day_clock.mjs";
export function g_day_sky_phase(fraction) {
  "the sky's continuous phase for a DAY that runs 6 AM → 7 PM, from the day fraction (0 = 6 AM sunrise, 1 = 7 PM dusk). the fraction becomes a wall-clock hour via g_day_clock (the shared fraction→clock), then the shared clock→phase mapping (g_clock_sky_phase) gives the colour — so the day arc, the #day_hours previewer, and the #day_conversation clock toast all read from ONE anchor set. BESPOKE (arithmetic) — do NOT auto-canonicalize";
  let clock = g_day_clock(fraction);
  return g_clock_sky_phase(clock);
}
