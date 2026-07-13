import { assert_json } from "./assert_json.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function null_not_is_assert_json(a, json) {
  let nn = null_not_is(a);
  assert_json(nn, json);
}
