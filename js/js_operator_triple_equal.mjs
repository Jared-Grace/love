import { equal } from "./equal.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
export function js_operator_triple_equal() {
  let operator = js_operator_triple_equal_symbol();
  let fn = equal;
  let r = {
    fn,
    operator,
  };
  return r;
}
