import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_node_return_is(node) {
  let type_is = js_node_type_is(node, "ReturnStatement");
  return type_is;
}
