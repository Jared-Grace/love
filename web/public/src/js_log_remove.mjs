import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export function js_log_remove(ast) {
  marker("1");
  function lambda(v) {
    let { stack, node } = v;
    let e1 = list_get_end_1(stack);
    function lambda3() {
      let name = node;
    }
    js_node_type_is_if(e1, "ExpressionStatement", lambda3);
  }
  js_visit_type(ast, "CallExpression", lambda);
}
