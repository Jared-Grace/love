import { js_callee_name_includes_try_curried_right } from "../../love/js/js_callee_name_includes_try_curried_right.mjs";
import { js_callee_name_includes_try } from "../../love/js/js_callee_name_includes_try.mjs";
import { list_find } from "../../love/js/list_find.mjs";
import { js_list_calls_nodes } from "../../love/js/js_list_calls_nodes.mjs";
export function js_find_call_name_includes(ast, part) {
  let nodes = js_list_calls_nodes(ast);
  let lambda = js_callee_name_includes_try_curried_right(part);
  let only = list_find(nodes, lambda);
  return only;
}
