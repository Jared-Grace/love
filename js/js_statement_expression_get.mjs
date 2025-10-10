import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function js_statement_expression_get(node) {
  let value = object_property_get(node, "expression");
  return value;
}
