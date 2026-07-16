import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_return_is(node) {
  let is = js_node_type_is(node, "ReturnStatement");
  return is;
}
