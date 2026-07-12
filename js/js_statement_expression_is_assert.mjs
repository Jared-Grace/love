import { js_node_type_is_assert } from "./js_node_type_is_assert.mjs";
export function js_statement_expression_is_assert(node) {
  js_node_type_is_assert(node, "ExpressionStatement");
}
