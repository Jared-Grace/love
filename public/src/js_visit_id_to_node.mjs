import { list_first } from "../../../love/public/src/list_first.mjs";
import { js_visit_ids_to_nodes } from "../../../love/public/src/js_visit_ids_to_nodes.mjs";
export function js_visit_id_to_node(ast, id) {
  let selects = js_visit_ids_to_nodes(ast, [id]);
  let first = list_first(selects);
  return first;
}
