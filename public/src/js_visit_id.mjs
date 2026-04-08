import { js_visit_property_node_index } from "../../../love/public/src/js_visit_property_node_index.mjs";
import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function js_visit_id(ast, target) {
  let id = null;
  js_visit_property_node_index(ast, inner);
  function inner(node, i) {
    const eq = equal(node, target);
    if (eq) {
      id = i;
    }
  }
  integer_is_assert(id);
  return id;
}
