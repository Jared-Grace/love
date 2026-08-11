import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_expression_true_false_compare_generic_keyword } from "./app_code_lesson_expression_true_false_compare_generic_keyword.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_true_false_compare_generic_line(
  combination,
  symbol,
) {
  arguments_assert(arguments, 2);
  ("one combination written out with this lesson's operator between the two words");
  let left = property_get(combination, "left");
  let right = property_get(combination, "right");
  let left_code =
    app_code_lesson_expression_true_false_compare_generic_keyword(left);
  let right_code =
    app_code_lesson_expression_true_false_compare_generic_keyword(right);
  let code = text_combine_multiple([left_code, " ", symbol, " ", right_code]);
  return code;
}
