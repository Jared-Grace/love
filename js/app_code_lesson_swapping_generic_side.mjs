import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_swapping_generic_side(
  left_number,
  op,
  right_number,
  wrap,
) {
  arguments_assert(arguments, 4);
  ("one side of the equality: a number, the operator, another number; parenthesised when wrap is on");
  let left = text_to(left_number);
  let right = text_to(right_number);
  let inner = text_combine_multiple([left, " ", op, " ", right]);
  let wrapped = text_combine_multiple(["(", inner, ")"]);
  let code = ternary(wrap, wrapped, inner);
  return code;
}
