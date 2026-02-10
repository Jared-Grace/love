import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { assert_json_get } from "./assert_json_get.mjs";
export function equal_not_assert(left, right) {
  let ne = equal_not(left, right);
  function lambda() {
    return {
      left,
      right,
    };
  }
  assert_json_get(ne, lambda);
}
