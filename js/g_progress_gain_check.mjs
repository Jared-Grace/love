import { g_progress_gain } from "./g_progress_gain.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
export function g_progress_gain_check() {
  "deterministic REGRESSION check of the progress-only movement rule: first observation earns nothing, moving closer earns the difference, moving away or standing still earns nothing (wander-proof), and the total over a monotone approach equals the starting distance. run: node scripts/ai.mjs g_progress_gain_check";
  assert(equal(g_progress_gain(null, 10), 0), "first observation → 0 (just records the start)");
  assert(equal(g_progress_gain(10, 7), 3), "10 → 7 closer → 3");
  assert(equal(g_progress_gain(7, 9), 0), "7 → 9 farther → 0 (wandering costs nothing)");
  assert(equal(g_progress_gain(7, 7), 0), "7 → 7 no change → 0");
  assert(equal(g_progress_gain(7, 1), 6), "7 → 1 adjacent → 6 (leg completes)");
  let best = 8;
  let total = 0;
  let steps = [8, 6, 7, 5, 5, 3, 1];
  for (const d of steps) {
    total = total + g_progress_gain(best, d);
    if (d < best) {
      best = d;
    }
  }
  assert(equal(total, 7), "monotone-ish walk 8→…→1 (with a backslide) totals 7 = start(8) − adjacent(1)");
  return {
    ok: true,
  };
}
