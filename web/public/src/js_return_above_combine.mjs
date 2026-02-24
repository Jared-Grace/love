import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_return_above_combine(ast) {
  function lambda(v) {
    let node = property_get(v, "node");
  }
  js_visit_type(ast, "ReturnStatement", lambda);
}
