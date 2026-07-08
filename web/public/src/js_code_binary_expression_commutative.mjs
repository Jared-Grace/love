import { js_operator_asterisk } from "../../../love/public/src/js_operator_asterisk.mjs";
import { js_operator_plus } from "../../../love/public/src/js_operator_plus.mjs";
export function js_code_binary_expression_commutative() {
  let p = js_operator_plus();
  let o = js_operator_asterisk();
  let commutatives = [p, o];
  return commutatives;
}
