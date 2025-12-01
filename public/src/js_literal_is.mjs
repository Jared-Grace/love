import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_literal_is(node) {
  let li = js_node_type_is(node, "Literal");
  return li;
}
