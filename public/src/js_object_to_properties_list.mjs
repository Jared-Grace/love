import { json_to } from "../../../love/public/src/json_to.mjs";
import { js_expression_array } from "../../../love/public/src/js_expression_array.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_object_to_properties_list(ast) {
  marker("1");
  function lambda(v) {
    let node = object_property_get(v, "node");
    let properties = object_property_get(node, "properties");
    let mapped = list_map_property(properties, "value");
    let expression = js_expression_array(mapped);
    let json = json_to(expression);
    log({
      mapped,
      json,
    });
  }
  js_visit_type(ast, "ObjectExpression", lambda);
}
