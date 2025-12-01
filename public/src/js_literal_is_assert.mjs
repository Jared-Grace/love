import { assert } from "../../../love/public/src/assert.mjs";
import { js_literal_is } from "../../../love/public/src/js_literal_is.mjs";
export function js_literal_is_assert() {
  let li = js_literal_is(init);
  assert(li);
}
