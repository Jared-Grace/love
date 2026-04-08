import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_visit_id_to_node_or_id_curried } from "../../../love/public/src/js_visit_id_to_node_or_id_curried.mjs";
export function js_visit_id_to_node_or_id_multiple(ast, list) {
  let r2 = js_visit_id_to_node_or_id_curried(ast);
  let selected = list_map(list, r2);
  return selected;
}
