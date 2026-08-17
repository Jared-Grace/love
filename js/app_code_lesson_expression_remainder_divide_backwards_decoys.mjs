import { arguments_assert } from "./arguments_assert.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_remainder_divide_backwards_decoys(
  shown_formula,
  answer_percent,
) {
  arguments_assert(arguments, 2);
  ("for the backwards kind (given the remainder formula, pick the % it equals): tempting wrong matches. The DIVISION a / b (it sits right inside the formula, but that is the division, not its remainder), the SWAPPED remainder b % a, and the QUOTIENT part Math.floor(a / b) (only a piece of the formula). Dividend is the formula's first integer, divisor the third (inside Math.floor)");
  let nums = text_integers(shown_formula);
  let dividend = list_get(nums, 0);
  let divisor = list_get(nums, 2);
  let division = js_code_binary_spaced_nb(dividend, "/", divisor);
  let swapped = js_code_binary_spaced_nb(divisor, "%", dividend);
  let floored = text_combine_multiple(["Math.floor(", division, ")"]);
  let r = [division, swapped, floored];
  return r;
}
