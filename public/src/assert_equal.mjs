import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
export function assert_equal(length, count) {
  let eq = equal(length, count);
  assert(eq);
}
