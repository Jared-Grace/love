import { integer_evenness } from "./integer_evenness.mjs";
export function integer_odd_is(n) {
  let e = integer_evenness(n);
  let o = e === 1;
  return o;
}
