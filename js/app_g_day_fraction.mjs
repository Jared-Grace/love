import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { positive_is } from "./positive_is.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
export function app_g_day_fraction(slices_done, slices_total, target_start, target_best, walk_weight, conversation_weight) {
  "day fraction (0 = sunrise, 1 = sunset) for #day_unbelievers. each person is an EQUAL share of the day worth (walk_weight + conversation_weight), so total = slices_total · that. a share is spent in two parts: the WALK fills walk_weight in proportion to distance CLOSED toward the person — (start − best) / (start − 1) — so a far person's walk has more steps and each ages the sky less (slower), a near one faster; then the CONVERSATION fills conversation_weight as a BLOCK the instant they convert (the stub charges a whole conversation's time at once). slices_done = people fully done (walk + conversation), each contributing the full per-person weight; the current leg adds only its walk so far. so the sky steps to the person's walk-end, JUMPS by the conversation block at convert, and lands exactly on sunset after the last person. no active leg (target_start null) → walk portion 0; prayed-while-adjacent (start ≤ 1) → walk whole";
  if (not(positive_is(slices_total))) {
    return 0;
  }
  let per_person = add(walk_weight, conversation_weight);
  let total = multiply(slices_total, per_person);
  let walk = 0;
  if (not(null_is(target_start))) {
    if (less_than_equal(target_start, 1)) {
      walk = 1;
    } else {
      walk = divide(subtract(target_start, target_best), subtract(target_start, 1));
    }
  }
  let done = multiply(slices_done, per_person);
  let current = multiply(walk_weight, walk);
  return divide(add(done, current), total);
}
