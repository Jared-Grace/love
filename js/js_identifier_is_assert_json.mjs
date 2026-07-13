import { js_identifier_is } from "./js_identifier_is.mjs";
import { assert_json } from "./assert_json.mjs";
export function js_identifier_is_assert_json(expression, json) {
  let ii = js_identifier_is(expression);
  assert_json(ii, {
    expression,
    json,
  });
}
