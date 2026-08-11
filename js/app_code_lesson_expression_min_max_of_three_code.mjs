import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_min_max_of_three_code(
  f_name,
  a,
  b,
  c,
) {
  arguments_assert(arguments, 4);
  ("the three-number call as a code string - the function name, then its three numbers separated by commas inside parentheses");
  let ta = text_to(a);
  let tb = text_to(b);
  let tc = text_to(c);
  let combined = text_combine_multiple([
    f_name,
    "(",
    ta,
    ", ",
    tb,
    ", ",
    tc,
    ")",
  ]);
  return combined;
}
