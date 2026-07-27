import { list_single } from "./list_single.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
export function js_selects_object_properties(ast, selects) {
  "The entries a named register keeps, from the line that binds it. The pair to the one that does this for ordered registers - every verb that puts one entry in or takes one out has to get here first, and none of them cares how.";
  let node = list_single(selects);
  let object_expression = js_node_value_get(node);
  let properties = js_object_expression_properties(object_expression);
  return properties;
}
