import { json_equal } from "../../../love/public/src/json_equal.mjs";
import { assert_json } from "./assert_json.mjs";
export function json_equal_assert(left, right) {
  let eq = json_equal(left, right);
  assert_json(eq, {
    left,
    right,
  });
}
