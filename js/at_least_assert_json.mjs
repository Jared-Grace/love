import { assert_json } from "./assert_json.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function at_least_assert_json(left, right, json) {
  let l = greater_than_equal(left, right);
  assert_json(l, {
    left,
    right,
    json,
  });
}
