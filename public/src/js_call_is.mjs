import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_call_is(node) {
  let type_is2 = js_node_type_is(node, "CallExpression");
  return type_is2;
}
