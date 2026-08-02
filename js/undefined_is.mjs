import { equal } from "./equal.mjs";
export function undefined_is(value) {
  let u = equal(typeof value, "undefined");
  return u;
}
