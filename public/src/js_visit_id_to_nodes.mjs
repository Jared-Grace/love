import { js_visit_property_node } from "../../../love/public/src/js_visit_property_node.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function js_visit_id_to_nodes(ast, id) {
  let result = [];
  let i = 0;
  function lambda(node) {
    let e = equal(id, i);
    if (e) {
      list_add(result, node);
    }
    i++;
  }
  js_visit_property_node(ast, lambda);
  return result;
}
