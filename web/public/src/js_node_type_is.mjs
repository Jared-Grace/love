import { js_node_is } from "./js_node_is.mjs";
import { js_node_type } from "./js_node_type.mjs";
export function js_node_type_is(node, type) {
  const type_is = js_node_is(node) && js_node_type(node) === type;
  return type_is;
}
