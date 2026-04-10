import { js_visit_id_to_node } from "../../../love/public/src/js_visit_id_to_node.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function js_visit_id_to_node_first(ast, selects) {
  let id = list_first(selects);
  let node = js_visit_id_to_node(ast, id);
  return node;
}
