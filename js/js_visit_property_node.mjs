import { js_visit } from "./js_visit.mjs";
import { property_get } from "./property_get.mjs";
export function js_visit_property_node(ast, lambda$node) {
  function lambda(v) {
    let node = property_get(v, "node");
    lambda$node(node);
  }
  js_visit(ast, lambda);
}
