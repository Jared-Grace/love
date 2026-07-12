import { equal_0 } from "./equal_0.mjs";
import { integer_evenness } from "./integer_evenness.mjs";
export function integer_even_is(n) {
  let e = integer_evenness(n);
  let eq = equal_0(e);
  return eq;
}
