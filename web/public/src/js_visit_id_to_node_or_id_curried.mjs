import { js_visit_id_to_node_or_id } from "../../../love/public/src/js_visit_id_to_node_or_id.mjs";
export function js_visit_id_to_node_or_id_curried(ast) {
  return function js_visit_id_to_node_or_id_curried_result(id) {
    return js_visit_id_to_node_or_id(ast, id);
  };
}
