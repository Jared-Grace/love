import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_or } from "./js_operator_or.mjs";
import { js_operator_and } from "./js_operator_and.mjs";
export function js_code_binary_expression_commutative() {
  let p = js_operator_plus_symbol();
  let o = js_operator_asterisk_symbol();
  let e = js_operator_triple_equal_symbol();
  let n = js_operator_bang_double_equal_symbol();
  let r = js_operator_or();
  let a = js_operator_and();
  let commutatives = [p, o, e, n, r, a];
  return commutatives;
}
