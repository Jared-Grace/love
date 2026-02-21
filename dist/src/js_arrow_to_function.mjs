import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_arrow_to_function(ast) {
  function lambda(v) {
    let { node } = v;
    property_set(node, "type", "FunctionExpression");
  }
  js_visit_type(ast, "ArrowFunctionExpression", lambda);
}
