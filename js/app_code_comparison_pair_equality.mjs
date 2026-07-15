import { integer_random } from "./integer_random.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
export function app_code_comparison_pair_equality() {
  "left/right operands for an EQUALITY (===) lesson: for a true answer use the SAME number on both sides, for a false answer use two different numbers";
  let max = app_code_lesson_operators_value_max();
  function pair(want_true) {
    if (want_true) {
      let same = integer_random(1, max);
      let equal_pair = {
        left: same,
        right: same,
      };
      return equal_pair;
    }
    let left = integer_random(1, max - 1);
    let right = integer_random(left + 1, max);
    let different_pair = {
      left,
      right,
    };
    return different_pair;
  }
  return pair;
}
