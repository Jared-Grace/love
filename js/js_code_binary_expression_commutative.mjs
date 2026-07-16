import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
export function js_code_binary_expression_commutative() {
  let p = js_operator_plus_symbol();
  let o = js_operator_asterisk_symbol();
  let e = js_operator_triple_equal_symbol();
  let n = js_operator_bang_double_equal_symbol();
  let commutatives = [p, o, e, n];
  return commutatives;
}
