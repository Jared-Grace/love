import { assert } from "./assert.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function less_than_equal_assert(a, b) {
  let le = less_than_equal(a, b);
  assert(le);
}
