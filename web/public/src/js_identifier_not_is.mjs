import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
export function js_identifier_not_is(id) {
  let nti3 = js_node_type_not_is(id, "Identifier");
  return nti3;
}
