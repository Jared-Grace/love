import { assert_json_get } from "./assert_json_get.mjs";
import { equal } from "./equal.mjs";
export function equal_assert(left, right) {
  let eq = equal(left, right);
  let r = {
    left,
    right,
  };
  assert_json(eq, r);
}
