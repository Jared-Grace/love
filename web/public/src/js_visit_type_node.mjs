import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_visit_type_node(ast, type, on_node) {
  function lambda7(v) {
    let n = property_get(v, "node");
    on_node(n);
  }
  js_visit_type(ast, type, lambda7);
}
