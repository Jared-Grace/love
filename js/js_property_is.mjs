import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_property_is(node) {
  let is = js_node_type_is(node, "Property");
  return is;
}
