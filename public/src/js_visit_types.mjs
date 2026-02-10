import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_node_types_is } from "../../../love/public/src/js_node_types_is.mjs";
import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { js_node_is } from "../../../love/public/src/js_node_is.mjs";
export function js_visit_types(ast, types, lambda$v) {
  function lambda(v) {
    let node = property_get(v, "node");
    if (js_node_is(node) && js_node_types_is(node, types)) {
      lambda$v(v);
    }
  }
  js_visit(ast, lambda);
}
