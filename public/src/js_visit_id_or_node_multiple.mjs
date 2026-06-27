import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_visit_id_or_node_curried } from "../../../love/public/src/js_visit_id_or_node_curried.mjs";
export function js_visit_id_or_node_multiple(ast, n) {
  let c = js_visit_id_or_node_curried(ast);
  let items_to_add = list_map(n, c);
  return items_to_add;
}
