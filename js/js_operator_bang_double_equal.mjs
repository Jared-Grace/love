import { not_equal } from "./not_equal.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
export function js_operator_bang_double_equal() {
  let operator = js_operator_bang_double_equal_symbol();
  let fn = not_equal;
  let o = {
    fn,
    operator,
  };
  return o;
}
