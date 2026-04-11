import { list_take } from "../../../love/public/src/list_take.mjs";
import { js_visit_function_nodes } from "../../../love/public/src/js_visit_function_nodes.mjs";
export function js_visit_function_nodes_list(ast, lambda$v) {
  let r = js_visit_function_nodes(ast, lambda$v);
  let taken = list_take(list, count);
  return r;
}
