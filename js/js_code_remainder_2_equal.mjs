import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
export function js_code_remainder_2_equal(left, remainder) {
  "the code asking whether left divided by 2 leaves remainder - left % 2 === 0 for even, left % 2 === 1 for odd - spaced the way every lesson's code is";
  let percent = js_operator_percent_symbol();
  let same = js_operator_triple_equal_symbol();
  let divided = js_code_binary_spaced_nb(left, percent, 2);
  let asked = js_code_binary_spaced_nb(divided, same, remainder);
  return asked;
}
