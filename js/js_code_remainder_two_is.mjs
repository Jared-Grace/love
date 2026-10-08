import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
export function js_code_remainder_two_is(left, left_over) {
  "the check that left leaves left_over when divided by 2, written spaced as code: n % 2 === 0 is the even check, n % 2 === 1 the odd one";
  let percent = js_operator_percent_symbol();
  let same = js_operator_triple_equal_symbol();
  let remainder = js_code_binary_spaced_nb(left, percent, "2");
  let check = js_code_binary_spaced_nb(remainder, same, left_over);
  return check;
}
