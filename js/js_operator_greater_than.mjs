import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { greater_than } from "./greater_than.mjs";
export function js_operator_greater_than() {
  let operator = js_operator_greater_than_symbol();
  let fn = greater_than;
  let o = {
    fn,
    operator,
  };
  return o;
}
