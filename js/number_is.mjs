import { equal } from "./equal.mjs";
export function number_is(value) {
  let v = equal(typeof value, "number") && isFinite(value);
  return v;
}
