import { equal } from "../../../love/public/src/equal.mjs";
export function js_operator_triple_equal() {
  let operator = "===";
  let fn = equal;
  let r = {
    fn,
    operator,
  };
  return r;
}
