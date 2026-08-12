import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { multiply } from "./multiply.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { app_code_lesson_expression_parentheses_same_strength_line } from "./app_code_lesson_expression_parentheses_same_strength_line.mjs";
export function app_code_lesson_expression_parentheses_minus_divide_divide_line() {
  arguments_assert(arguments, 0);
  ("a / (b * c), with a built as b * c * k so the answer is the whole number k and the bracket-less value a / b * c is whole too");
  let b = integer_random(2, 4);
  let c = integer_random(2, 3);
  let k = integer_random(2, 4);
  let left = multiply(b, c);
  let a = multiply(left, k);
  let divided = js_operator_division_symbol();
  let times = js_operator_asterisk_symbol();
  let code = app_code_lesson_expression_parentheses_same_strength_line(
    a,
    divided,
    b,
    times,
    c,
  );
  return code;
}
