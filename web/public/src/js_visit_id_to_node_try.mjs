import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_size_ } from "../../../love/public/src/list_size_1.mjs";
import { js_visit_id_to_nodes } from "../../../love/public/src/js_visit_id_to_nodes.mjs";
export function js_visit_id_to_node_try(ast, id) {
  let node = null;
  let selects = js_visit_id_to_nodes(ast, id);
  let s = list_size_(selects);
  if (s) {
    node = list_first(selects);
  }
  return node;
}
