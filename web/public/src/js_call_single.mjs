import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_list_calls_nodes } from "../../../love/public/src/js_list_calls_nodes.mjs";
export function js_call_single(ast) {
  let nodes = js_list_calls_nodes(ast);
  let only = list_single(nodes);
  return only;
}
