import { js_visit_nodes_lambda } from "../../../love/public/src/js_visit_nodes_lambda.mjs";
import { js_visit } from "../../../love/public/src/js_visit.mjs";
export function js_visit_nodes(parsed, on_each) {
  let lambda = js_visit_nodes_lambda(on_each);
  js_visit(parsed, lambda);
}
