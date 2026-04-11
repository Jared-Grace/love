import { js_visit_id_or_node } from "../../../love/public/src/js_visit_id_or_node.mjs";
export function js_visit_id_or_node_curried(ast) {
  let r = function js_visit_id_or_node_curried_result(n) {
    let item_to_add = js_visit_id_or_node(ast, n);
    return item_to_add;
  };
  return r;
}
