import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { js_node_is } from "../../../love/public/src/js_node_is.mjs";
export function js_visit_nodes(parsed, on_each) {
  let lambda = function lambda2(v) {
    let node = property_get(v, "node");
    let a = js_node_is(node);
    if (a) {
      on_each(node);
    }
  };
  js_visit(parsed, lambda);
}
