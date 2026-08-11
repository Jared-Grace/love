import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { text_to } from "./text_to.mjs";
import { range_map } from "./range_map.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join } from "./list_join.mjs";
export function app_code_lesson_expression_remainder_subtract_subtract_code(
  number,
  divisor,
  count,
) {
  arguments_assert(arguments, 3);
  ("the remainder worked out as repeated subtraction - subtract_code(17, 5, 3) is 17 - 5 - 5 - 5: the number, then the divisor taken away count times");
  let minus = js_operator_minus_symbol();
  function divisor_text(index) {
    let t = text_to(divisor);
    return t;
  }
  let subtractions = range_map(count, divisor_text);
  let single = text_to(number);
  let terms = list_concat_single(single, subtractions);
  let separator = text_combine_multiple([" ", minus, " "]);
  let chain = list_join(terms, separator);
  return chain;
}
