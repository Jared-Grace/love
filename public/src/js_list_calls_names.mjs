import { js_call_callee_name } from "../../../love/public/src/js_call_callee_name.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_list_calls_nodes } from "../../../love/public/src/js_list_calls_nodes.mjs";
export function js_list_calls_names(ast) {
  let mapped = js_list_calls_nodes(ast);
  let names = list_map(mapped, js_call_callee_name);
  return names;
}
