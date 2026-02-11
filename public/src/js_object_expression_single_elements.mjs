import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
export function js_object_expression_single_elements(ast) {
  let node_type = "ObjectExpression";
  let vs = js_list_type(ast, node_type);
  let only = list_single(vs);
  let node = property_get(only, "node");
  let elements = property_get(node, "elements");
  return elements;
}
