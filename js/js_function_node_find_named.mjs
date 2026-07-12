import { list_single } from "./list_single.mjs";
import { js_function_node_find_named_list } from "./js_function_node_find_named_list.mjs";
export function js_function_node_find_named(ast, name) {
  let list = js_function_node_find_named_list(ast, name);
  let only = list_single(list);
  return only;
}
