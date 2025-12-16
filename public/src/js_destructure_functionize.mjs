import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_destructure_functionize(ast) {
  marker("1");
  function lambda(v) {
    return;
    let node2 = object_property_get(v, "node");
    log({
      v,
    });
  }
  js_visit_type(ast, "VariableDeclarator", lambda);
  return;
  let { node, parent, context } = a;
}
