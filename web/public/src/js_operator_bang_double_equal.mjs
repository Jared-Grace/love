import { not_equal } from "../../../love/public/src/not_equal.mjs";
export function js_operator_bang_double_equal() {
  let operator = "!==";
  let fn = not_equal;
  let o = {
    fn,
    operator,
  };
  return o;
}
