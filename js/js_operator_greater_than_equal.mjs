import { js_operator_greater_than_equal_symbol } from "./js_operator_greater_than_equal_symbol.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function js_operator_greater_than_equal() {
  let operator = js_operator_greater_than_equal_symbol();
  let fn = greater_than_equal;
  let o = {
    fn,
    operator,
  };
  return o;
}
