import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_calls_to_each(ast) {
  "multiple calls line after line can be changed into each";
  let call_name = null;
  function lambda(v) {
    let { node } = v;
    let { expression } = node;
    let awaited = false;
    let call = expression;
    function lambda3() {
      awaited = true;
      call = object_property_get(expression, "argument");
    }
    js_node_type_is_if(expression, "AwaitExpression", lambda3);
    log(expression);
  }
  js_visit_type(ast, "ExpressionStatement", lambda);
}
