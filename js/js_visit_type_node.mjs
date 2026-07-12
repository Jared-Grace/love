import { js_visit_type } from "./js_visit_type.mjs";
import { property_get } from "./property_get.mjs";
export function js_visit_type_node(ast, type, lambda$node) {
  function lambda(v) {
    let n = property_get(v, "node");
    lambda$node(n);
  }
  js_visit_type(ast, type, lambda);
}
