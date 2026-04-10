import { js_visit_identifiers } from "../../../love/public/src/js_visit_identifiers.mjs";
import { js_visit_nodes_lambda } from "../../../love/public/src/js_visit_nodes_lambda.mjs";
export function js_visit_identifiers_nodes(ast, on_each) {
  let lambda = js_visit_nodes_lambda(on_each);
  js_visit_identifiers(ast, lambda);
}
