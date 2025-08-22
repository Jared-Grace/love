import { not } from "./not.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_node_is } from "./js_node_is.mjs";
export function js_visit_nodes(parsed, on_each) {
  function lambda(v) {
    let { node } = v;
    let a = js_node_is(node);
    if (not(a)) {
      return;
    }
    on_each(node);
  }
  js_visit(parsed, lambda);
}
