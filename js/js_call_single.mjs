import { list_single } from "./list_single.mjs";
import { js_list_calls_nodes } from "./js_list_calls_nodes.mjs";
export function js_call_single(ast) {
  let nodes = js_list_calls_nodes(ast);
  let only = list_single(nodes);
  return only;
}
