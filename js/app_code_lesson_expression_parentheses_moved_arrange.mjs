import { app_code_lesson_expression_parentheses_same_strength_line } from "./app_code_lesson_expression_parentheses_same_strength_line.mjs";
import { js_code_operation } from "./js_code_operation.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_expression_parentheses_moved_arrange(
  a,
  b,
  c,
  group_first,
) {
  arguments_assert(arguments, 4);
  ("(a + b) * c when group_first, otherwise a + (b * c)");
  let plus = js_operator_plus_symbol();
  let times = js_operator_asterisk_symbol();
  let inside = js_code_operation(a, plus, b);
  let sum_wrapped = js_code_wrap_parenthesis(inside);
  let grouped = js_code_operation(sum_wrapped, times, c);
  let spread = app_code_lesson_expression_parentheses_same_strength_line(
    a,
    plus,
    b,
    times,
    c,
  );
  let code = ternary(group_first, grouped, spread);
  return code;
}
