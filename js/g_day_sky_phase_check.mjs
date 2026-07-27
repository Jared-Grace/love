import { g_day_sky_phase } from "./g_day_sky_phase.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
export function g_day_sky_phase_check() {
  "deterministic REGRESSION check of the clock-anchored day sky phase: fraction 0 → sunrise (phase 5), 0.25 → morning (6, 9:00), 0.5 → noon (7, 12:00), 0.75 → afternoon (8, 15:00), 1 → sunset (9, 18:00). run: node scripts/ai.mjs g_day_sky_phase_check";
  assert(equal(g_day_sky_phase(0), 5), "fraction 0 → sunrise (5)");
  assert(equal(g_day_sky_phase(0.25), 6), "fraction 0.25 → morning (6)");
  assert(equal(g_day_sky_phase(0.5), 7), "fraction 0.5 → noon (7)");
  assert(equal(g_day_sky_phase(0.75), 8), "fraction 0.75 → afternoon (8)");
  assert(equal(g_day_sky_phase(1), 9), "fraction 1 → sunset (9)");
  return {
    ok: true,
  };
}
