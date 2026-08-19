import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { modulo } from "./modulo.mjs";
export function js_operator_percent() {
  let operator = js_operator_percent_symbol();
  let fn = modulo;
  let o = {
    fn,
    operator,
  };
  return o;
}
