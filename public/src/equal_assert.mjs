import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function equal_assert(left, right) {
  let eq = equal(left, right);
  assert(eq);
  return;
  function lambda2() {
    return {
      left,
      right,
    };
  }
  assert_json_get(eq, lambda2);
}
