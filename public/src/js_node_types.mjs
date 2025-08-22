import { js_node_type } from "./js_node_type.mjs";
import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_node_types(ast) {
  return list_adder_unique((la) => {
    js_visit_nodes(ast, (node) => {
      la(js_node_type(node));
    });
  });
}
