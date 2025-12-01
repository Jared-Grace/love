import { marker } from "../../../love/public/src/marker.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { js_literal_is } from "../../../love/public/src/js_literal_is.mjs";
export function js_literal_is_assert(node, init) {
  marker("1");
  let li = js_literal_is(node);
  assert(li);
}
