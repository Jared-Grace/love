import { assert_json_get } from "./assert_json_get.mjs";
import { equal } from "./equal.mjs";
export function equal_assert(left, right) {
  let eq = equal(left, right);
  function lambda() {
    let r = {
      left,
      right,
    };
    return r;
  }
  assert_json_get(eq, lambda);
}
