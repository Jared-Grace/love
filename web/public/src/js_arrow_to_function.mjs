import { object_property_set } from "./object_property_set.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_arrow_to_function(ast) {
  function lambda(v) {
    let { node } = v;
    object_property_set(node, "type", "FunctionExpression");
  }
  js_visit_type(ast, "ArrowFunctionExpression", lambda);
}
