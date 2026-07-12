import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_node_type_is_if(node, type, lambda) {
  let type_is = js_node_type_is(node, type);
  if (type_is) {
    lambda();
  }
}
