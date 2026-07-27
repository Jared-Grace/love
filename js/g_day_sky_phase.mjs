import { g_clock_sky_phase } from "./g_clock_sky_phase.mjs";
export function g_day_sky_phase(fraction) {
  "the sky's continuous phase for a #day_unbelievers DAY that runs SUNRISE→SUNSET, from the day fraction (0 = dawn, 1 = sunset). a thin wrapper over g_clock_sky_phase: the fraction maps onto wall-clock 6:00..18:00, then the shared clock→phase mapping does the rest — so the day's exact-sunset arc and the #hour previewer read from ONE anchor set. clamped to [0,1] here (a full day stops at sunset); after-hours activity that should spill into dusk drives g_clock_sky_phase past 18:00 directly. BESPOKE (arithmetic) — do NOT auto-canonicalize";
  let f = fraction;
  if (f < 0) {
    f = 0;
  }
  if (f > 1) {
    f = 1;
  }
  const clock = 6 + f * 12;
  return g_clock_sky_phase(clock);
}
