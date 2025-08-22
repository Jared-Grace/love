import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_log_remove(ast) {
  marker("1");
  function lambda(v) {
    function lambda3() {}
    js_node_type_is_if(node, type, lambda3);
  }
  js_visit_type(ast, "CallExpression", lambda);
}
