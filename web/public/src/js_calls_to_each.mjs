import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_calls_to_each(ast) {
  "multiple calls line after line can be changed into each";
  let call_name = null;
  function lambda(v) {
    let a = null;
    a = f;
    let { node } = v;
    let { expression } = node;
    function lambda3() {}
    js_node_type_is_if(expression, "AwaitExpression", lambda3);
    log(expression);
  }
  js_visit_type(ast, "ExpressionStatement", lambda);
}
