import { less_than } from "../../../love/public/src/less_than.mjs";
export function js_operator_less_than() {
  let operator = "<";
  let fn = less_than;
  let o = {
    fn,
    operator,
  };
  return o;
}
