import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function equal_assert(left, right) {
  let eq = equal(left, right);
  function lambda2() {
    let r = {
      left,
      right,
    };
    return r;
  }
  assert_json_get(eq, lambda2);
}
