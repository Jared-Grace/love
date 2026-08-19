import { app_code_division_dividend } from "./app_code_division_dividend.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { multiply_add } from "./multiply_add.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { multiply } from "./multiply.mjs";
export function app_code_lesson_expression_whole_part_both_decoys_backwards(
  whole_part_text,
  division,
) {
  arguments_assert(arguments, 2);
  ("backwards decoys (given a whole part value, pick the division that has it): two tempting wrong divisions. The QUOTIENT trap is a division whose Math.floor is the shown value - (2 * w + 1) / 2 floors to w - so a learner who thinks the whole part is just the quotient (forgot to multiply back by the divisor) is tempted; its real whole part is 2 * w. The VALUE trap is a division that evaluates exactly to the shown value (3 * w / 3), tempting a learner who confuses the whole part with the plain division result; its real whole part is 3 * w. Both are skipped when the whole part is 0, where a floor-0 or value-0 division genuinely has whole part 0 and would be a real answer, not a decoy");
  let whole_part = app_code_division_dividend(whole_part_text);
  let zero = equal(whole_part, 0);
  if (zero) {
    let r = [];
    return r;
  }
  let quotient_dividend = multiply_add(2, whole_part, 1);
  let quotient_trap = js_code_binary_spaced_nb(quotient_dividend, "/", 2);
  let value_dividend = multiply(3, whole_part);
  let value_trap = js_code_binary_spaced_nb(value_dividend, "/", 3);
  let r3 = [quotient_trap, value_trap];
  return r3;
}
