import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_destructure_functionize(ast) {
  marker("1");
  function lambda(v) {
    let node2 = object_property_get(v, "node");
    log({
      node2,
    });
    return;
    let properties = object_property_get(node2, "properties");
    let mi = list_multiple_is(properties);
    if (mi) {
    }
    let stack = object_property_get(v, "stack");
    let id = object_property_get(node2, "id");
  }
  js_visit_type(ast, "ObjectPattern", lambda);
  return;
  let { node, parent, context } = a;
}
