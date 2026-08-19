import { js_operator_double_asterisk_symbol } from "./js_operator_double_asterisk_symbol.mjs";
import { exponent } from "./exponent.mjs";
export function js_operator_double_asterisk() {
  let operator = js_operator_double_asterisk_symbol();
  let fn = exponent;
  let o = {
    fn,
    operator,
  };
  return o;
}
