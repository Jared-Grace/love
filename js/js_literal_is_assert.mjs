import { assert } from "./assert.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
export function js_literal_is_assert(node) {
  let li = js_literal_is(node);
  assert(li);
}
