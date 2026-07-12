import { js_visit_nodes_lambda } from "./js_visit_nodes_lambda.mjs";
import { js_visit } from "./js_visit.mjs";
export function js_visit_nodes(parsed, on_each) {
  let lambda = js_visit_nodes_lambda(on_each);
  js_visit(parsed, lambda);
}
