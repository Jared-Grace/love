import { assert } from "./assert.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
export function js_identifier_is_assert(expression) {
  let ii = js_identifier_is(expression);
  assert(ii);
}
