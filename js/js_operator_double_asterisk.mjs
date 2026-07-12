import { exponent } from "./exponent.mjs";
export function js_operator_double_asterisk() {
  let operator = "**";
  let fn = exponent;
  let o = {
    fn,
    operator,
  };
  return o;
}
