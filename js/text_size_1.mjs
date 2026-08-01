import { equal } from "./equal.mjs";
import { text_size } from "./text_size.mjs";
export function text_size_1(t) {
  let left = text_size(t);
  let s = equal(left, 1);
  return s;
}
