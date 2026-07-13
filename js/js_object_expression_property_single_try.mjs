import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_single } from "./list_single.mjs";
export function js_object_expression_property_single_try(node) {
  let property = null;
  if (js_node_type_not_is(node, "ObjectExpression")) {
    return property;
  }
  let properties = js_object_expression_properties(node);
  if (!list_size_1(properties)) {
    return property;
  }
  let single = list_single(properties);
  if (js_node_type_not_is(single, "Property")) {
    return property;
  }
  property = single;
  return property;
}
