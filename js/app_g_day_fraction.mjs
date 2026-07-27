import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { positive_is } from "./positive_is.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
export function app_g_day_fraction(slices_done, slices_total, target_start, target_best) {
  "day fraction (0 = sunrise, 1 = sunset) for #day_unbelievers: a SLICE is one person-leg, so the day is (legs completed + progress through the current leg) / total legs — each person an EQUAL share of the day. within a leg the sky moves in proportion to distance CLOSED toward the discerned person, (start − best) / (start − 1), where start = distance when prayed and best = smallest distance reached so far. so a FAR person's leg has more steps and each ages the sky LESS (slower), a near person faster, and reaching adjacency (best = 1) completes the leg exactly. no active leg (target_start null) → 0 progress in the current slot; prayed-while-adjacent (start ≤ 1) → the leg is already whole";
  if (not(positive_is(slices_total))) {
    return 0;
  }
  let leg = 0;
  if (not(null_is(target_start))) {
    if (less_than_equal(target_start, 1)) {
      leg = 1;
    } else {
      leg = divide(subtract(target_start, target_best), subtract(target_start, 1));
    }
  }
  return divide(add(slices_done, leg), slices_total);
}
