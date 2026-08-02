import { equal } from "./equal.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { js_node_type } from "./js_node_type.mjs";
export function js_node_type_is(node, type) {
  let left = js_node_type(node);
  let type_is = js_node_is(node) && equal(left, type);
  return type_is;
}
