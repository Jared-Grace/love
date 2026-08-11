import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_min_max_generic_code(
  a,
  b,
  called_name,
) {
  arguments_assert(arguments, 3);
  ("the two-number call as a code string - the function's name, then its two numbers separated by a comma inside parentheses");
  let ta = text_to(a);
  let tb = text_to(b);
  let combined = text_combine_multiple([called_name, "(", ta, ", ", tb, ")"]);
  return combined;
}
