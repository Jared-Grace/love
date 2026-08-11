import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_swapping_generic_side } from "./app_code_lesson_swapping_generic_side.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_swapping_generic_pair_code(op, a, b, wrap) {
  arguments_assert(arguments, 4);
  ("the whole line for one pair of numbers: a op b === b op a, each side parenthesised when wrap is on");
  let left = app_code_lesson_swapping_generic_side(a, op, b, wrap);
  let right = app_code_lesson_swapping_generic_side(b, op, a, wrap);
  let code = text_combine_multiple([left, " === ", right]);
  return code;
}
