import { less_than } from "./less_than.mjs";
import { identity } from "./identity.mjs";
export function js_operator_less_than() {
  let operator = "<";
  let fn = less_than;
  let o = {
    fn,
    operator,
    left_transform: identity,
  };
  return o;
}
