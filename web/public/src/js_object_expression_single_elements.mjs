import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export function js_object_expression_single_elements(ast) {
  let node_type = "ObjectExpression";
  let vs = js_visit_type(ast, node_type, () => {});
  let only = list_single(vs);
  let node = property_get(only, "node");
  log({
    node,
  });
  return node;
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
