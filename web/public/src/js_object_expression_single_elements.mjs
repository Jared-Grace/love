import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_object_expression_single_elements(ast) {
  let node_type = "ObjectExpression";
  function lambda(v) {
    let node = property_get(v, "node");
    let stack = property_get(v, "stack");
    let e1 = list_get_end_1(stack);
    js_node_type_is_if(node2, type, function lambda3() {});
    log({
      node,
      e1,
    });
  }
  js_visit_type(ast, node_type, lambda);
  return;
  let elements = property_get(node, "elements");
  return elements;
  const js_dollar_arguments = {
    remaining,
    node,
    stack1,
    stack2,
    stack3,
    ast,
    afters,
  };
}
