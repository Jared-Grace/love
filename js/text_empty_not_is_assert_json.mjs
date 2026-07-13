import { assert_json } from "./assert_json.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function text_empty_not_is_assert_json(s, json) {
  let ne = text_empty_not_is(s);
  assert_json(ne, {
    s,
    json,
  });
}
