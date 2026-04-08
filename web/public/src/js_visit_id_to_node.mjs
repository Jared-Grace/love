import { assert } from "../../../love/public/src/assert.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { js_visit_id_to_nodes } from "../../../love/public/src/js_visit_id_to_nodes.mjs";
export function js_visit_id_to_node(ast, id) {
  let node = null;
  let selects = js_visit_id_to_nodes(ast, id);
  let s1 = list_size_1(selects);
  if (s1) {
    node = list_first(selects);
  }
  assert(b);
  return node;
}
