import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_expression_statement_is(item) {
  let type_is3 = js_node_type_is(item, "ExpressionStatement");
  return type_is3;
}
