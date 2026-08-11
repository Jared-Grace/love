import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_comparison_pair_ordering } from "./app_code_comparison_pair_ordering.mjs";
import { less_than } from "./less_than.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { integer_random } from "./integer_random.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { not } from "./not.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
export function app_code_lesson_expression_comparison_equal_generic_examples(
  symbol,
  true_ordering,
) {
  arguments_assert(arguments, 2);
  ("all THREE relations stand together on every screen, so the case that tells this operator apart from === - the strict one, which is true here and false there - is never the one left out");
  let ordering = app_code_comparison_pair_ordering(less_than);
  let max = app_code_lesson_operators_value_max();
  function equal_pair() {
    let n = integer_random(1, max);
    let coordinates = {
      left: n,
      right: n,
    };
    return coordinates;
  }
  function code_of(coordinates) {
    let left = property_get(coordinates, "left");
    let right = property_get(coordinates, "right");
    let code = js_code_binary_spaced_nb(left, symbol, right);
    return code;
  }
  function refill() {
    let v = equal_pair();
    let same = code_of(v);
    let v2 = ordering(true_ordering);
    let held = code_of(v2);
    let n2 = not(true_ordering);
    let v3 = ordering(n2);
    let refused = code_of(v3);
    let list = [same, held, refused];
    return list;
  }
  let iterator = list_iterator_refillable(refill);
  return iterator;
}
