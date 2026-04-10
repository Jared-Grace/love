import { js_node_type_is_assert } from "../../../love/public/src/js_node_type_is_assert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_statement_expression_get(node) {
  js_node_type_is_assert(node, type);
  let value = property_get(node, "ExpressionStatement");
  return value;
}
