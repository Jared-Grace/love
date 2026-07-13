import { assert_json } from "./assert_json.mjs";
import { integer_is } from "./integer_is.mjs";
export function integer_is_assert_json(i, json) {
  let ii = integer_is(i);
  assert_json(ii, {
    i,
    json,
  });
}
