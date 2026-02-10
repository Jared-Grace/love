import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_statement_expression_get(node) {
  let value = property_get(node, "expression");
  return value;
}
