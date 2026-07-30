import { equal_not } from "./equal_not.mjs";
import { assert_json_get } from "./assert_json_get.mjs";
export function equal_not_assert(left, right) {
  let ne = equal_not(left, right);
  let r = {
    left,
    right,
  };
  assert_json(ne, r);
}
