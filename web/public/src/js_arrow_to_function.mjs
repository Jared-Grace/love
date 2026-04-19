import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_arrow_to_function_node } from "../../../love/public/src/js_arrow_to_function_node.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_arrow_to_function(ast) {
  function lambda(v) {
    let node = property_get(v, "node");
    js_arrow_to_function_node(node);
  }
  js_visit_type(ast, "ArrowFunctionExpression", lambda);
}
