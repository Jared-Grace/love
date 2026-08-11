import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_in_between_range_code(a, b, c) {
  arguments_assert(arguments, 3);
  ("the fixed idiom: a < b && b < c, the middle number repeated");
  let a_text = text_to(a);
  let b_text = text_to(b);
  let c_text = text_to(c);
  let code = text_combine_multiple([
    a_text,
    " < ",
    b_text,
    " && ",
    b_text,
    " < ",
    c_text,
  ]);
  return code;
}
