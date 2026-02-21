import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_expression_array } from "../../../love/public/src/js_expression_array.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_object_to_properties_list(ast) {
  function lambda(v) {
    let node = property_get(v, "node");
    let properties = property_get(node, "properties");
    let mapped = list_map_property(properties, "value");
    let expression = js_expression_array(mapped);
    object_replace(node, expression);
    let b = 1;
    log([mapped, b]);
  }
  js_visit_type(ast, "ObjectExpression", lambda);
}
