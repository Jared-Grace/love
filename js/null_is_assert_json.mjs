import { assert_json } from "./assert_json.mjs";
import { null_is } from "./null_is.mjs";
export function null_is_assert_json(value, json) {
  let n = null_is(value);
  assert_json(n, {
    value,
    json,
  });
}
