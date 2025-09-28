import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
export function equal_assert(length, count) {
  let eq = equal(length, count);
  assert(eq);
}
