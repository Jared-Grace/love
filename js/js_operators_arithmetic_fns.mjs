import { js_operator_plus } from "./js_operator_plus.mjs";
import { js_operator_minus } from "./js_operator_minus.mjs";
import { js_operator_asterisk } from "./js_operator_asterisk.mjs";
import { js_operator_division } from "./js_operator_division.mjs";
export function js_operators_arithmetic_fns() {
  let fns = [
    js_operator_plus,
    js_operator_minus,
    js_operator_asterisk,
    js_operator_division,
  ];
  return fns;
}
