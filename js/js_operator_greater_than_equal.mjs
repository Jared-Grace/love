import { greater_than_equal } from "./greater_than_equal.mjs";
export function js_operator_greater_than_equal() {
  let operator = ">=";
  let fn = greater_than_equal;
  let o = {
    fn,
    operator,
  };
  return o;
}
