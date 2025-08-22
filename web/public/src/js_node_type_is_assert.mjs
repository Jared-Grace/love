import { assert } from "./assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_node_type_is_assert(node, type) {
  let type_is = js_node_type_is(node, type);
  assert(type_is);
}
