import { assert } from "../../../love/public/src/assert.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
export function equal_not_assert(left, right) {
  let ne = equal_not(left, right);
  assert(ne);
}
