import { property_list_map_property } from "./property_list_map_property.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_expression_array } from "./js_expression_array.mjs";
import { log } from "./log.mjs";
import { property_get } from "./property_get.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_object_to_properties_list(ast) {
  function lambda(v) {
    let node = property_get(v, "node");
    let mapped = property_list_map_property(node, "properties", "value");
    let expression = js_expression_array(mapped);
    object_replace(node, expression);
    let b = 1;
    log(js_object_to_properties_list.name, [mapped, b]);
  }
  js_visit_type(ast, "ObjectExpression", lambda);
}
