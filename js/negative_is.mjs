import { less_than } from "./less_than.mjs";
export function negative_is(i) {
  let n = less_than(i, 0);
  return n;
}
