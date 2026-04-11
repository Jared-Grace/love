import { js_visit_id_or_node } from "../../../love/public/src/js_visit_id_or_node.mjs";
export function js_visit_id_or_node_curried(ast) {
  return function js_visit_id_or_node_curried_result(n) {
    return js_visit_id_or_node(ast, n);
  };
}
