import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { text_to } from "./text_to.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
  let open = js_code_parenthesis_left();
  let close = js_code_parenthesis_right();
  let a_text = text_to(a);
  let b_text = text_to(b);
  let c_text = text_to(c);
  let grouped = [
    open,
    a_text,
    " ",
    plus,
    " ",
    b_text,
    close,
    " ",
    times,
    " ",
    c_text,
  ];
  let spread = [
    a_text,
    " ",
    plus,
    " ",
    open,
    b_text,
    " ",
    times,
    " ",
    c_text,
    close,
  ];
  let parts = ternary(group_first, grouped, spread);
  let code = text_combine_multiple(parts);
  return code;
}
