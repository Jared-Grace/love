import { js_visit } from "./js_visit.mjs";
import { js_node_is } from "./js_node_is.mjs";
export function js_visit_nodes(parsed, on_each) {
  js_visit(parsed, (v) => {
    let { node } = v;
    if (!js_node_is(node)) {
      return;
    }
    on_each(node);
  });
}
