import { js_node_type } from "../../../love/public/src/js_node_type.mjs";
import { js_visit_nodes } from "../../../love/public/src/js_visit_nodes.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
export function js_node_types(ast) {
  function lambda2(la) {
    function lambda(node) {
      let nt = js_node_type(node);
      la(nt);
    }
    js_visit_nodes(ast, lambda);
  }
  let result = list_adder_unique(lambda2);
  return result;
}
