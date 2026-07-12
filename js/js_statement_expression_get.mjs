import { js_statement_expression_is_assert } from "./js_statement_expression_is_assert.mjs";
import { property_get } from "./property_get.mjs";
export function js_statement_expression_get(node) {
  js_statement_expression_is_assert(node);
  let expression = property_get(node, "expression");
  return expression;
}
