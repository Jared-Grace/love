import { js_statement_expression_is_assert } from "../../../love/public/src/js_statement_expression_is_assert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_statement_expression_get(node) {
  js_statement_expression_is_assert(node);
  let value = property_get(node, "expression");
  return value;
}
