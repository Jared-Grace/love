import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_visit_property_node(inner2, ast) {
  function lambda(v) {
    let node = property_get(v, "node");
    inner2(node);
  }
  js_visit(ast, lambda);
}
