import { list_map } from "./list_map.mjs";
import { js_visit_id_to_node_or_id_curried } from "./js_visit_id_to_node_or_id_curried.mjs";
export function js_visit_id_to_node_or_id_multiple(list, ast) {
  let r = js_visit_id_to_node_or_id_curried(ast);
  let selected = list_map(list, r);
  return selected;
}
