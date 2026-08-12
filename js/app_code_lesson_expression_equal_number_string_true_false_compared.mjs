import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
export function app_code_lesson_expression_equal_number_string_true_false_compared(
  left_code,
  right_code,
) {
  arguments_assert(arguments, 2);
  ("two pieces of code with === between them");
  let symbol = js_operator_triple_equal_symbol();
  let code = app_code_operator_code(left_code, symbol, right_code);
  return code;
}
