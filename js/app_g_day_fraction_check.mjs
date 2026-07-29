import { assert_message } from "./assert_message.mjs";
import { app_g_day_fraction } from "./app_g_day_fraction.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
export function app_g_day_fraction_check() {
  "deterministic REGRESSION check of the walk+conversation day fraction. At 1:1 over 3 people the day is 6 equal sixths, alternating walk then conversation: dawn 0 → walk to person 1 fills 1/6 → convert BLOCK jumps to 2/6 → … → reach person 3 at 5/6 → convert to sunset (1). Within a walk the sky moves by distance closed; a far leg and near leg both fill their sixth. Also checks a reweighted 2:1 ratio (walk-heavier). run: node scripts/ai.mjs app_g_day_fraction_check";
  assert_message(
    equal(app_g_day_fraction(0, 3, null, null, 1, 1), 0),
    "dawn, no leg → 0",
  );
  assert_message(
    equal(app_g_day_fraction(0, 3, 8, 8, 1, 1), 0),
    "leg just prayed (best = start) → 0",
  );
  assert_message(
    equal(app_g_day_fraction(0, 3, 8, 1, 1, 1), divide(1, 6)),
    "reached person 1's walk-end → 1/6",
  );
  assert_message(
    equal(app_g_day_fraction(1, 3, null, null, 1, 1), divide(2, 6)),
    "person 1 fully done (walk + conversation block) → 2/6",
  );
  assert_message(
    equal(
      app_g_day_fraction(1, 3, 4, 3, 1, 1),
      divide(add(2, divide(1, 3)), 6),
    ),
    "1 done + 1/3 into person 2's walk → (2 + 1/3)/6",
  );
  assert_message(
    equal(app_g_day_fraction(2, 3, 2, 1, 1, 1), divide(5, 6)),
    "reached person 3's walk-end → 5/6",
  );
  assert_message(
    equal(app_g_day_fraction(3, 3, null, null, 1, 1), 1),
    "all 3 done → sunset (1)",
  );
  assert_message(
    equal(app_g_day_fraction(0, 3, 1, 1, 1, 1), divide(1, 6)),
    "prayed while adjacent → walk whole → 1/6",
  );
  assert_message(
    equal(app_g_day_fraction(0, 3, 8, 1, 2, 1), divide(2, 9)),
    "2:1 ratio: person 1 walk-end fills the bigger walk share → 2/9",
  );
  assert_message(
    equal(app_g_day_fraction(1, 3, null, null, 2, 1), divide(3, 9)),
    "2:1 ratio: person 1 fully done → 3/9",
  );
  return {
    ok: true,
  };
}
