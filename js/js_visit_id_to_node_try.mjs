import { list_first } from "./list_first.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_visit_id_to_nodes } from "./js_visit_id_to_nodes.mjs";
export function js_visit_id_to_node_try(ast, id) {
  let node = null;
  let selects = js_visit_id_to_nodes(ast, id);
  let s = list_size_1(selects);
  if (s) {
    node = list_first(selects);
  }
  return node;
}
