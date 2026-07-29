import { g_day_sky_phase } from "./g_day_sky_phase.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { assert } from "./assert.mjs";
export function g_day_sky_phase_check() {
  "deterministic REGRESSION check of the clock-anchored day sky phase, now a 6 AM → 7 PM working day: fraction 0 → 6 AM sunrise (phase 5), 1 → 7 PM dusk (past the 18:00 sunset anchor 9, short of full night 10), midday just after noon (phase 7-8). run: node scripts/ai.mjs g_day_sky_phase_check";
  assert(equal(g_day_sky_phase(0), 5), "fraction 0 → 6 AM sunrise (5)");
  let end = g_day_sky_phase(1);
  assert(greater_than(end, 9), "fraction 1 → 7 PM, past sunset into dusk (> 9)");
  assert(less_than(end, 10), "fraction 1 → short of full night (< 10)");
  let mid = g_day_sky_phase(0.5);
  assert(greater_than(mid, 7), "fraction 0.5 → after noon (> 7)");
  assert(less_than(mid, 8), "fraction 0.5 → before afternoon peak (< 8)");
  return {
    ok: true,
  };
}
