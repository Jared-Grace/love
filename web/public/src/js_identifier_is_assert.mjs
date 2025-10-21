import { assert } from "../../../love/public/src/assert.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
export function js_identifier_is_assert(expression) {
  let ii = js_identifier_is(expression);
  assert(ii);
}
