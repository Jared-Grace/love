import { json_equal } from "./json_equal.mjs";
import { assert_json } from "./assert_json.mjs";
export function json_equal_assert_json(left, right, json) {
  let eq = json_equal(left, right);
  assert_json(eq, {
    left,
    right,
    json,
  });
}
