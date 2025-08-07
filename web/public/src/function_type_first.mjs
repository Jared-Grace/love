import { js_visit_nodes } from "./js_visit_nodes.mjs";
export function function_type_first() {
  js_visit_nodes(parsed, (node) => {
    la(js_node_type(node));
  });
}
