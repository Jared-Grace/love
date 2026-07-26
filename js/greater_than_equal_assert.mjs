import { assert_json_get } from "./assert_json_get.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function greater_than_equal_assert(left, right) {
  let l = greater_than_equal(left, right);
  function lambda() {
    let r = {
      left,
      right,
    };
    return r;
  }
  assert_json_get(l, lambda);
}
