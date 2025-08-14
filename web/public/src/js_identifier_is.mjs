import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_identifier_is(node) {
  const ii = js_node_type_is(node, "Identifier");
  return ii;
}
