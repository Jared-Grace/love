import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { list_map } from "./list_map.mjs";
import { js_list_calls_nodes } from "./js_list_calls_nodes.mjs";
export function js_list_calls_names(ast) {
  let mapped = js_list_calls_nodes(ast);
  let names = list_map(mapped, js_call_callee_name_try);
  return names;
}
