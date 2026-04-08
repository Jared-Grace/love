import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { js_visit_id_to_nodes } from "../../../love/public/src/js_visit_id_to_nodes.mjs";
import { list_single } from "./list_single.mjs";
export function js_visit_id_to_node(ast, id) {
  let selects = js_visit_id_to_nodes(ast, id);
  let s1 = list_size_1(selects);
  if (s1) {
    let first = null;
    first = list_single(selects);
  }
  return first;
}
