import { js_node_to_visitors } from "../../../love/public/src/js_node_to_visitors.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export function js_visit_match(ast, node_search) {
  let matches = js_node_to_visitors(ast, node_search);
  let v_match = list_single(matches);
  return v_match;
}
