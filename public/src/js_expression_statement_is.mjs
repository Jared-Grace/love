import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_expression_statement_is(node) {
  let esi = js_node_type_is(node, "ExpressionStatement");
  return esi;
}
