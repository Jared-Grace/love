import { integer_random } from "./integer_random.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function app_code_comparison_pair_ordering(compare) {
  "left/right operands for an ORDERING comparison lesson: pick a smaller and a larger number, then order them so the comparison yields want_true";
  let max = app_code_lesson_operators_value_max();
  function pair(want_true) {
    let small = integer_random(1, max - 1);
    let large = integer_random(small + 1, max);
    let left = small;
    let right = large;
    let is_true = compare(left, right);
    let matches = equal(is_true, want_true);
    if (not(matches)) {
      left = large;
      right = small;
    }
    let coordinates = {
      left,
      right,
    };
    return coordinates;
  }
  return pair;
}
