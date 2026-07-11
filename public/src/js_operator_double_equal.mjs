import { equal_loose } from "../../../love/public/src/equal_loose.mjs";
export function js_operator_double_equal() {
  let operator = "==";
  let fn = equal_loose;
  let o = {
    fn,
    operator,
  };
  return o;
}
