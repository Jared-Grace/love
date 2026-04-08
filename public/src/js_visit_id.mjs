import { js_visit_property_node } from "../../../love/public/src/js_visit_property_node.mjs";
import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function js_visit_id(ast, target) {
  let id = null;
  let i = 0;
  js_visit_property_node(ast, inner2);
  function inner2(node) {
    inner(node, i);
    i++;
  }
  integer_is_assert(id);
  return id;
  function inner(node, i) {
    if (equal(node, target)) {
      id = i;
    }
  }
}
