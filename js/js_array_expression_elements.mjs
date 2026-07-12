import { property_get } from "./property_get.mjs";
export function js_array_expression_elements(node) {
  let value = property_get(node, "elements");
  return value;
}
