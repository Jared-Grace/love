import { assert_json_get } from "./assert_json_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_node_type_is_assert_json(node, type, json) {
  let type_is = js_node_type_is(node, type);
  let r = {
    node,
    type,
    json,
  };
  assert_json(type_is, r);
}
