import { js_code_operation } from "./js_code_operation.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_expression_comparison_and_comparison(want) {
  arguments_assert(arguments, 1);
  ("a comparison code string that is `want`: low < high is true, low > high is false");
  let low = integer_random(1, 5);
  let min = add(low, 1);
  let high = integer_random(min, 9);
  let op = ternary(want, "<", ">");
  let code = js_code_operation(low, op, high);
  return code;
}
