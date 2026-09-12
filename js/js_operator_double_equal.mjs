import { js_operator_double_equal_symbol } from "./js_operator_double_equal_symbol.mjs";
import { equal_loose } from "./equal_loose.mjs";
export function js_operator_double_equal() {
  let operator = js_operator_double_equal_symbol();
  let fn = equal_loose;
  let o = {
    fn,
    operator,
  };
  return o;
}
