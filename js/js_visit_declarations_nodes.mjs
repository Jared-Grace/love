import { js_visit_declarations } from "./js_visit_declarations.mjs";
import { js_visit_nodes_lambda } from "./js_visit_nodes_lambda.mjs";
export function js_visit_declarations_nodes(ast, on_each) {
  let lambda = js_visit_nodes_lambda(on_each);
  js_visit_declarations(ast, lambda);
}
