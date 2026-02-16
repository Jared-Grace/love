import { assert } from "../../../love/public/src/assert.mjs";
import { less_than_equal } from "../../../love/public/src/less_than_equal.mjs";
export function less_than_equal_assert(a, b) {
  let le = less_than_equal(a, b);
  assert(le);
}
