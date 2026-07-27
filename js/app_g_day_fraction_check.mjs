import { app_g_day_fraction } from "./app_g_day_fraction.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
export function app_g_day_fraction_check() {
  "deterministic REGRESSION check of the per-person-leg day fraction: dawn = 0, a leg just prayed = 0 progress, reaching a person = that many thirds, a far leg and a near leg both fill exactly one third (only their PER-STEP speed differs), sunset = 1 after the 3rd, and praying while already adjacent counts the leg whole. run: node scripts/ai.mjs app_g_day_fraction_check";
  assert(equal(app_g_day_fraction(0, 3, null, null), 0), "dawn, no leg → 0");
  assert(equal(app_g_day_fraction(0, 3, 8, 8), 0), "leg just prayed (best = start) → 0");
  assert(equal(app_g_day_fraction(0, 3, 8, 1), divide(1, 3)), "reached person 1 from far → 1/3");
  assert(equal(app_g_day_fraction(1, 3, null, null), divide(1, 3)), "person 1 done, before next prayer → 1/3");
  assert(equal(app_g_day_fraction(1, 3, 4, 3), divide(add(1, divide(1, 3)), 3)), "1 done + 1/3 into a near leg → (1 + 1/3)/3");
  assert(equal(app_g_day_fraction(2, 3, 2, 1), 1), "reached person 3 → sunset (1)");
  assert(equal(app_g_day_fraction(3, 3, null, null), 1), "all 3 done → sunset (1)");
  assert(equal(app_g_day_fraction(0, 3, 1, 1), divide(1, 3)), "prayed while adjacent → leg whole → 1/3");
  return {
    ok: true,
  };
}
