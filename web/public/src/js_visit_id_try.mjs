import { equal } from "../../../love/public/src/equal.mjs";
import { js_visit_property_node_index } from "../../../love/public/src/js_visit_property_node_index.mjs";
export function js_visit_id_try(ast, target) {
  let id = null;
  js_visit_property_node_index(ast, inner);
  function inner(node, i) {
    const eq = equal(node, target);
    if (eq) {
      id = i;
    }
  }
  return id;
}
