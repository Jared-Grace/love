import { null_is } from "../../../love/public/src/null_is.mjs";
import { list_concat_single } from "../../../love/public/src/list_concat_single.mjs";
import { function_current_selects_add } from "../../../love/public/src/function_current_selects_add.mjs";
import { js_visit_id_or_node } from "../../../love/public/src/js_visit_id_or_node.mjs";
import { js_visit_id_to_node } from "../../../love/public/src/js_visit_id_to_node.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
export async function function_node_select_inner(
  select_fn_name,
  node_id,
  on_previous,
  ast,
  args_comma,
) {
  let args = null;
  if (null_is(args_comma)) {
    args = [];
  }
  let node = js_visit_id_to_node(ast, node_id);
  let concated = list_concat_single(node, args);
  let n = await function_run(select_fn_name, concated);
  let item_to_add = js_visit_id_or_node(ast, n);
  let r = await function_current_selects_add(item_to_add, on_previous);
  return r;
}
