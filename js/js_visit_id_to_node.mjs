import { js_visit_id_to_node_try } from "./js_visit_id_to_node_try.mjs";
import { null_not_is_assert } from "./null_not_is_assert.mjs";
export function js_visit_id_to_node(ast, id) {
  let node = js_visit_id_to_node_try(ast, id);
  null_not_is_assert(node);
  return node;
}
