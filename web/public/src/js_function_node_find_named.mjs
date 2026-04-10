import { log } from "../../../love/public/src/log.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_function_node_find_named_list } from "../../../love/public/src/js_function_node_find_named_list.mjs";
export function js_function_node_find_named(ast, name) {
  let list = js_function_node_find_named_list(ast, name);
  log(js_function_node_find_named.name, {
    list,
  });
  let only = list_single(list);
  return only;
}
