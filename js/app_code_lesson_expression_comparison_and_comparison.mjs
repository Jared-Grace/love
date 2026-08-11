import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { ternary } from "./ternary.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_comparison_and_comparison(want) {
  arguments_assert(arguments, 1);
  ("a comparison code string that is `want`: low < high is true, low > high is false");
  let low = integer_random(1, 5);
  let min = add(low, 1);
  let high = integer_random(min, 9);
  let op = ternary(want, "<", ">");
  let left = text_to(low);
  let right = text_to(high);
  let code = text_combine_multiple([left, " ", op, " ", right]);
  return code;
}
