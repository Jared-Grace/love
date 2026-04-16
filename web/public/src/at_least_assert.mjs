import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { at_least } from "../../../love/public/src/at_least.mjs";
export function at_least_assert(left, right) {
  let l = at_least(left, right);
  function lambda() {
    let r = {
      left,
      right,
    };
    return r;
  }
  assert_json_get(l, lambda);
}
