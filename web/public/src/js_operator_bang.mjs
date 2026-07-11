import { not } from "../../../love/public/src/not.mjs";
export function js_operator_bang() {
  let operator = "!";
  let fn = not;
  let o = {
    fn,
    operator,
  };
  return o;
}
