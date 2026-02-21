import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { greater_than_or_equal } from "../../../love/public/src/greater_than_or_equal.mjs";
export function greater_than_or_equal_assert(left, right) {
  let l = greater_than_or_equal(left, right);
  function lambda() {
    let r = {
      left,
      right,
    };
    return r;
  }
  assert_json_get(l, lambda);
}
