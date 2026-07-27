import { g_clock_sky_phase } from "./g_clock_sky_phase.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
export function g_clock_sky_phase_check() {
  "deterministic REGRESSION check of the full-day clock→phase mapping: every anchor hour hits its phase (0→4 night, 6→5 sunrise, 9→6, 12→7, 15→8, 18→9 sunset, 24→10 night), midpoints interpolate (3→4.5, 21→9.5 dusk), and out-of-range clamps. run: node scripts/ai.mjs g_clock_sky_phase_check";
  assert(equal(g_clock_sky_phase(0), 4), "0:00 → night (4)");
  assert(equal(g_clock_sky_phase(6), 5), "6:00 → sunrise (5)");
  assert(equal(g_clock_sky_phase(9), 6), "9:00 → morning (6)");
  assert(equal(g_clock_sky_phase(12), 7), "12:00 → noon (7)");
  assert(equal(g_clock_sky_phase(15), 8), "15:00 → afternoon (8)");
  assert(equal(g_clock_sky_phase(18), 9), "18:00 → sunset (9)");
  assert(equal(g_clock_sky_phase(24), 10), "24:00 → night (10)");
  assert(equal(g_clock_sky_phase(3), 4.5), "3:00 → halfway night→sunrise (4.5)");
  assert(equal(g_clock_sky_phase(21), 9.5), "21:00 → halfway sunset→night, i.e. dusk (9.5)");
  assert(equal(g_clock_sky_phase(-5), 4), "before 0 clamps → night (4)");
  assert(equal(g_clock_sky_phase(30), 10), "after 24 clamps → night (10)");
  return {
    ok: true,
  };
}
