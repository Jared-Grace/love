import { list_single } from "./list_single.mjs";
import { js_node_to_visitors } from "./js_node_to_visitors.mjs";
export function js_node_to_visitor(ast, node_search) {
  let matches = js_node_to_visitors(ast, node_search);
  let v = list_single(matches);
  return v;
}
