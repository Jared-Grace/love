import { app_code_comparison_equality_symbol } from "./app_code_comparison_equality_symbol.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_comparison_side } from "./app_code_comparison_side.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { js_true_false_word } from "./js_true_false_word.mjs";
export function app_code_lesson_expression_comparing_a_comparison_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a comparison, then === or !==, then a plain true or false, with the operator picked so the whole line lands on want_true");
  let left = app_code_comparison_side();
  let right_value = list_random_item([true, false]);
  let symbol = app_code_comparison_equality_symbol(
    left,
    right_value,
    want_true,
  );
  let left_code = property_get(left, "code");
  let right_code = js_true_false_word(right_value);
  let code = app_code_operator_code(left_code, symbol, right_code);
  return code;
}
