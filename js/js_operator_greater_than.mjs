import { greater_than } from "./greater_than.mjs";
export function js_operator_greater_than() {
  let operator = ">";
  let fn = greater_than;
  let o = {
    fn,
    operator,
  };
  return o;
}
