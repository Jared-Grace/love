import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_operator_double_asterisk_symbol } from "./js_operator_double_asterisk_symbol.mjs";
import { range_from } from "./range_from.mjs";
export function app_code_lesson_swapping_generic_numbers(op) {
  arguments_assert(arguments, 1);
  ("The numbers a swapping line may put on either side of this operator: two to nine for every operator but a power, which gets only three and five.");
  ("A power is worked out as multiplications, so its numbers decide how much a learner has to hold. Two to nine let 9 ** 8 onto the screen, which is tens of millions. Three and five keep both sides small - 5 ** 3 is 125 and 3 ** 5 is 243 - and still land on different values.");
  ("Three and five also keep every number on the line meaning one thing. On 5 ** 3 the base is 5, the exponent 3 and the multiplications 2; on 3 ** 5 they are 3, 5 and 4. A pair one apart would not: 4 ** 5 is four multiplications on a 4. And neither side can be 2 ** 2, where ** and * and + all give 4, or the pair 2 and 4, where both sides are 16.");
  let right = js_operator_double_asterisk_symbol();
  let power_is = equal(op, right);
  if (power_is) {
    let power_numbers = [3, 5];
    return power_numbers;
  }
  let numbers = range_from(2, 9);
  return numbers;
}
