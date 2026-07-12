import { less_than_equal } from "./less_than_equal.mjs";
export function js_operator_less_than_equal() {
  let operator = "<=";
  let fn = less_than_equal;
  let o = {
    fn,
    operator,
  };
  return o;
}
