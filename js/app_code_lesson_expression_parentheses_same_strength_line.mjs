import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_parentheses_same_strength_line(
  a,
  outer_symbol,
  b,
  inner_symbol,
  c,
) {
  arguments_assert(arguments, 5);
  ("the one shape this lesson ever writes: a number, the outer operator, then a group of two numbers");
  let open = js_code_parenthesis_left();
  let close = js_code_parenthesis_right();
  let t = text_to(a);
  let t2 = text_to(b);
  let t3 = text_to(c);
  let code = text_combine_multiple([
    t,
    " ",
    outer_symbol,
    " ",
    open,
    t2,
    " ",
    inner_symbol,
    " ",
    t3,
    close,
  ]);
  return code;
}
