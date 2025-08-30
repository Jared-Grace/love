import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_calls_to_each(ast) {
  "multiple calls line after line can be changed into each";
  let call_name = null;
  function lambda(v) {
    let { node } = v;
    let { expression } = node;
    js_node_type_is_if(node2, type, function lambda3() {});
    log(expression);
  }
  js_visit_type(ast, "ExpressionStatement", lambda);
}
