import { js_code_operation } from "./js_code_operation.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_parentheses_same_strength_line(
  a,
  outer_symbol,
  b,
  inner_symbol,
  c,
) {
  arguments_assert(arguments, 5);
  ("the one shape this lesson ever writes: a number, the outer operator, then a group of two numbers");
  let inner = js_code_operation(b, inner_symbol, c);
  let grouped = js_code_wrap_parenthesis(inner);
  let code = js_code_operation(a, outer_symbol, grouped);
  return code;
}
