import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_visit_property_node_index } from "../../../love/public/src/js_visit_property_node_index.mjs";
import { integer_is_assert } from "../../../love/public/src/integer_is_assert.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function js_visit_id(ast, target) {
  let c = js_unparse(target);
  let id = null;
  js_visit_property_node_index(ast, inner);
  function inner(node, i) {
    try {
      let code = js_unparse(node);
      if (equal(c, code)) {
        log(js_visit_id.name, {
          code,
        });
      }
    } catch (E) {}
    if (equal(node, target)) {
      id = i;
    }
  }
  integer_is_assert(id);
  return id;
}
