import { js_visit_type } from "./js_visit_type.mjs";
export function js_arrow_to_function(ast) {
  js_visit_type(ast, "ArrowFunctionExpression", function lambda(v) {});
}
