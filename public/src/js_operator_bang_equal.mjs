import { not_equal_loose } from "../../../love/public/src/not_equal_loose.mjs";
export function js_operator_bang_equal() {
  let operator = "!=";
  let fn = not_equal_loose;
  let o = {
    fn,
    operator,
  };
  return o;
}
