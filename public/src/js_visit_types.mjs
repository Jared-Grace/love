import { js_node_types_is } from "./js_node_types_is.mjs";
import { marker } from "./marker.mjs";
import { log } from "./log.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_children_get } from "./js_visit_children_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
export function js_visit_types(ast, type, lambda$v) {
  marker("1");
  function lambda(v) {
    let { node } = v;
    if (js_node_is(node) && js_node_types_is(node, type)) {
      lambda$v(v);
    }
  }
  js_visit(ast, lambda);
}
