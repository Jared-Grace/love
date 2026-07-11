import { js_operator_asterisk_symbol } from "../../../love/public/src/js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "../../../love/public/src/js_operator_plus_symbol.mjs";
export function js_code_binary_expression_commutative() {
  let p = js_operator_plus_symbol();
  let o = js_operator_asterisk_symbol();
  let commutatives = [p, o];
  return commutatives;
}
