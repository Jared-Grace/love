import { equal_not } from "./equal_not.mjs";
import { assert_json } from "./assert_json.mjs";
export function equal_not_assert_json(left, right, json) {
  let ne = equal_not(left, right);
  assert_json(ne, {
    left,
    right,
    json,
  });
}
