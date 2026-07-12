import { js_array_expression_elements } from "./js_array_expression_elements.mjs";
import { js_type_find } from "./js_type_find.mjs";
import { property_get } from "./property_get.mjs";
export function js_array_expression_single_elements(ast) {
  let node_type = "ArrayExpression";
  let only = js_type_find(ast, node_type);
  let node = property_get(only, "node");
  let elements = js_array_expression_elements(node);
  return elements;
}
