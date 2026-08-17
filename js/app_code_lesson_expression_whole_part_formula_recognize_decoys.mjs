import { arguments_assert } from "./arguments_assert.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_whole_part_formula_recognize_decoys(
  question,
  answer,
) {
  arguments_assert(arguments, 2);
  ("tempting wrong rewrites of a / b: Math.floor(a / b) alone (forgot to multiply back by the divisor), a * b (multiplied the two numbers instead), and a / b * b (forgot to round down). Built from the division's numbers so they stay tied to the question");
  let nums = text_integers(question);
  let dividend = list_get(nums, 0);
  let divisor = list_get(nums, 1);
  let no_multiply = text_combine_multiple(["Math.floor(", question, ")"]);
  let t = text_to(dividend);
  let t3 = text_to(divisor);
  let times = text_combine_multiple([t, " * ", t3]);
  let t4 = text_to(divisor);
  let no_floor = text_combine_multiple([question, " * ", t4]);
  let r = [no_multiply, times, no_floor];
  return r;
}
