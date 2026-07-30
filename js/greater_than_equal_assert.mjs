import { assert_json } from "./assert_json.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function greater_than_equal_assert(left, right) {
  let l = greater_than_equal(left, right);
  let r = {
    left,
    right,
  };
  assert_json(l, r);
}
