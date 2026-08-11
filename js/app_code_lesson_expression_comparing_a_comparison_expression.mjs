import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_comparison_side } from "./app_code_comparison_side.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_equals } from "./property_equals.mjs";
import { equal } from "./equal.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { ternary } from "./ternary.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_expression_comparing_a_comparison_keyword } from "./app_code_lesson_expression_comparing_a_comparison_keyword.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_comparing_a_comparison_expression(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("a comparison, then === or !==, then a plain true or false, with the operator picked so the whole line lands on want_true");
  let left = app_code_comparison_side();
  let right_value = list_random_item([true, false]);
  let agree = property_equals(left, "value", right_value);
  let wanted = equal(agree, want_true);
  let on_true = js_operator_triple_equal_symbol();
  let on_false = js_operator_bang_double_equal_symbol();
  let symbol = ternary(wanted, on_true, on_false);
  let left_code = property_get(left, "code");
  let right_code =
    app_code_lesson_expression_comparing_a_comparison_keyword(right_value);
  let code = text_combine_multiple([left_code, " ", symbol, " ", right_code]);
  return code;
}
