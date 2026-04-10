import { log } from "../../../love/public/src/log.mjs";
import { js_visit_id_to_node_try } from "../../../love/public/src/js_visit_id_to_node_try.mjs";
import { null_not_is_assert } from "../../../love/public/src/null_not_is_assert.mjs";
export function js_visit_id_to_node(ast, id) {
  let node = js_visit_id_to_node_try(ast, id);
  log(js_visit_id_to_node.name, {
    node,
  });
  null_not_is_assert(node);
  return node;
}
