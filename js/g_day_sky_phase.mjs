import { g_clock_sky_phase } from "./g_clock_sky_phase.mjs";
export function g_day_sky_phase(fraction) {
  "the sky's continuous phase for a DAY that runs 6 AM → 7 PM, from the day fraction (0 = 6 AM sunrise, 1 = 7 PM dusk). a thin wrapper over g_clock_sky_phase: the fraction maps onto wall-clock 6:00..19:00 — one hour past the 18:00 sunset anchor, into dusk, so the workday spills a little into evening — then the shared clock→phase mapping does the rest, so the day arc and the #hour previewer read from ONE anchor set. clamped to [0,1] here. BESPOKE (arithmetic) — do NOT auto-canonicalize";
  let f = fraction;
  if (f < 0) {
    f = 0;
  }
  if (f > 1) {
    f = 1;
  }
  const clock = 6 + f * 13;
  return g_clock_sky_phase(clock);
}
