import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_equal_number_string_true_false_compared(
  left_code,
  right_code,
) {
  arguments_assert(arguments, 2);
  ("two pieces of code with === between them");
  let symbol = js_operator_triple_equal_symbol();
  let code = text_combine_multiple([left_code, " ", symbol, " ", right_code]);
  return code;
}
