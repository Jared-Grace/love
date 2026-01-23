import { log } from "../../../love/public/src/log.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_object_to_values_list(ast) {
  marker("1");
  function lambda(v) {
    let node = object_property_get(v, "node");
    log({
      node,
    });
  }
  js_visit_type(ast, "ObjectExpression", lambda);
}
