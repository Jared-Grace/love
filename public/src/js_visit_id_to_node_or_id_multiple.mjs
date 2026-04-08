import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_visit_id_to_node_or_id_curried } from "../../../love/public/src/js_visit_id_to_node_or_id_curried.mjs";
export function js_visit_id_to_node_or_id_multiple(ast, value) {
  let r2 = js_visit_id_to_node_or_id_curried(ast);
  let selected = list_map(value, r2);
  return selected;
}
