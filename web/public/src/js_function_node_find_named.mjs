import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_visit_types_function_named_list } from "../../../love/public/src/js_visit_types_function_named_list.mjs";
export function js_function_node_find_named(ast, name) {
  let list = js_visit_types_function_named_list(ast, name);
  let only = list_single(list);
  return only;
}
