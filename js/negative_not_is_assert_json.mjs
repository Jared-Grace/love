import { assert_json } from "./assert_json.mjs";
import { negative_not_is } from "./negative_not_is.mjs";
export function negative_not_is_assert_json(start, json) {
  let nn = negative_not_is(start);
  assert_json(nn, {
    start,
    json,
  });
}
