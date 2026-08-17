import { arguments_assert } from "./arguments_assert.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_remainder_divide_recognize_decoys(
  question,
  answer,
) {
  arguments_assert(arguments, 2);
  ("tempting wrong remainder rewrites of a / b: the WHOLE PART alone Math.floor(a / b) * b (forgot to subtract it from the dividend), the no-floor a - a / b * b (forgot to round the division down), and a - Math.floor(a / b) (forgot to multiply the quotient back by the divisor). Built from the division's numbers so they stay tied to the question");
  let nums = text_integers(question);
  let dividend = list_get(nums, 0);
  let divisor = list_get(nums, 1);
  let t = text_to(divisor);
  let whole_part = text_combine_multiple(["Math.floor(", question, ") * ", t]);
  let t4 = text_to(dividend);
  let t5 = text_to(divisor);
  let no_floor = text_combine_multiple([t4, " - ", question, " * ", t5]);
  let t6 = text_to(dividend);
  let no_multiply = text_combine_multiple([
    t6,
    " - Math.floor(",
    question,
    ")",
  ]);
  let r = [whole_part, no_floor, no_multiply];
  return r;
}
