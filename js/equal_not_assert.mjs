import { equal_not } from "./equal_not.mjs";
import { assert_json } from "./assert_json.mjs";
export function equal_not_assert(left, right) {
  let ne = equal_not(left, right);
  let r = {
    left,
    right,
  };
  assert_json(ne, r);
}
