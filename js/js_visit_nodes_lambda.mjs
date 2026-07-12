import { js_node_is } from "./js_node_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_visit_nodes_lambda(on_each) {
  let r = function js_visit_nodes_lambda_inner(v) {
    let node = property_get(v, "node");
    let a = js_node_is(node);
    if (a) {
      on_each(node);
    }
  };
  return r;
}
