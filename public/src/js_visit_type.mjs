import { js_visit_types } from "./js_visit_types.mjs";
import { log } from "./log.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_children_get } from "./js_visit_children_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
export function js_visit_type(ast, type, lambda$v) {
  function lambda(v) {
    let { node } = v;
    if (js_node_is(node) && js_node_type_is(node, type)) {
      lambda$v(v);
    }
  }
  js_visit(ast, lambda);
  return;
  js_visit_types(ast, [type], lambda$v);
}
