import { assert } from "../../../love/public/src/assert.mjs";
import { json_equal } from "../../../love/public/src/json_equal.mjs";
export function json_equal_assert(left, right) {
  let eq = json_equal(left, right);
  assert(eq);
}
