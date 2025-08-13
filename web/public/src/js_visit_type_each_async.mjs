import { js_visit_type } from "./js_visit_type.mjs";
export function js_visit_type_each_async(lambda) {
  js_visit_type(ast, "ExpressionStatement", lambda);
}
