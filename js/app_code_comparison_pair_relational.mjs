import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { range_1 } from "./range_1.mjs";
import { list_cartesian_product_self } from "./list_cartesian_product_self.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { equal } from "./equal.mjs";
export function app_code_comparison_pair_relational(fn) {
  "left/right operands (numbers, possibly EQUAL) for a relational lesson like <= or >=; enumerates every (left, right) pair over 1..max and picks a random one whose fn result equals want_true, so equal-operand cases (the only place <= differs from <) are included";
  let max = app_code_lesson_operators_value_max();
  let values = range_1(max);
  let slots = 2;
  let combinations = list_cartesian_product_self(values, slots);
  function pair(want_true) {
    function matches(combination) {
      let left = list_first(combination);
      let right = list_last(combination);
      let result = fn(left, right);
      return equal(result, want_true);
    }
    let matching = list_filter(combinations, matches);
    let chosen = list_random_item(matching);
    let coordinates = {
      left: list_first(chosen),
      right: list_last(chosen),
    };
    return coordinates;
  }
  return pair;
}
