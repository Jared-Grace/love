import { list_first } from "../../../love/public/src/list_first.mjs";
import { js_visit_id_to_nodes } from "../../../love/public/src/js_visit_id_to_nodes.mjs";
import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
export function js_visit_id_to_node(ast, id) {
  let selects = js_visit_id_to_nodes(ast, id);list_size_1
  let first = list_single(selects);
  return first;
}
