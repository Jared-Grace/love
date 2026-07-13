import { assert_json_get } from "./assert_json_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_node_type_is_assert_json(node, type, json) {
  let type_is = js_node_type_is(node, type);
  function lambda() {
    let r = {
      node,
      type,
      json,
    };
    return r;
  }
  assert_json_get(type_is, lambda);
}
