import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_node_type_is_assert(node, type) {
  let type_is = js_node_type_is(node, type);
  assert(type_is);
  function lambda2() {}
  assert_json_get(b, lambda2);
}
