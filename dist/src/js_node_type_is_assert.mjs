import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_node_type_is_assert(node, type) {
  let type_is = js_node_type_is(node, type);
  function lambda2() {
    let r = {
      node,
      type,
    };
    return r;
  }
  assert_json_get(type_is, lambda2);
}
