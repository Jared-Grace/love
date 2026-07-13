import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
export function equal_assert_json(left, right, json) {
  let eq = equal(left, right);
  assert_json(eq, {
    left,
    right,
    json,
  });
}
