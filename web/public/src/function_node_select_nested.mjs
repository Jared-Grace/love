import { function_current_ast } from "../../../love/public/src/function_current_ast.mjs";
import { js_visit_ids_to_nodes } from "../../../love/public/src/js_visit_ids_to_nodes.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { user_data_get } from "../../../love/public/src/user_data_get.mjs";
import { function_node_select_inner } from "../../../love/public/src/function_node_select_inner.mjs";
export async function function_node_select_nested(select_fn_name) {
  let ast = await function_current_ast();
  let ids = await user_data_get("function_current_selects");
  let first_id = list_first(ids);
  let selects = js_visit_ids_to_nodes(ast, ids);
  let first = list_first(selects);
  function lambda(previous) {
    list_remove(previous, first_id);
  }
  let r = await function_node_select_inner(select_fn_name, first, lambda);
  return r;
}
