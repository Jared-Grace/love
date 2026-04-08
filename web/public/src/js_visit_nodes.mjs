import { js_visit_property_node } from "../../../love/public/src/js_visit_property_node.mjs";
import { js_visit_nodes_lambda } from "../../../love/public/src/js_visit_nodes_lambda.mjs";
export function js_visit_nodes(parsed, on_each) {
  let lambda = js_visit_nodes_lambda(on_each);
  js_visit_property_node(parsed, lambda);
}
