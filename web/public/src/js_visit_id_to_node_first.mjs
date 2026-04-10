import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_visit_id_to_node } from "../../../love/public/src/js_visit_id_to_node.mjs";
export function js_visit_id_to_node_first(ast, selects) {
  let id = list_single(selects);
  let node = js_visit_id_to_node(ast, id);
  return node;
}
