import { equal } from "./equal.mjs";
export function text_is(value) {
  let ti = equal(typeof value, "string");
  return ti;
}
