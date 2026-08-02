import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
export function promise_is(value) {
  let v =
    not_equal(value, null) &&
    equal(typeof value, "object") &&
    equal(typeof value.then, "function") &&
    equal(typeof value.catch, "function");
  return v;
}
