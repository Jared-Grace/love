import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
import { js_visit_nodes_lambda } from "./js_visit_nodes_lambda.mjs";
export function js_visit_identifiers_nodes(ast, on_each) {
  let lambda = js_visit_nodes_lambda(on_each);
  js_visit_identifiers(ast, lambda);
}
