import { function_current_selects_add } from "../../../love/public/src/function_current_selects_add.mjs";
import { js_visit_id_or_node } from "../../../love/public/src/js_visit_id_or_node.mjs";
import { js_visit_id_to_node } from "../../../love/public/src/js_visit_id_to_node.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
export async function function_node_select_inner(
  select_fn_name,
  node_id,
  on_previous,
  ast,
) {
  let node = js_visit_id_to_node(ast, node_id);
  let n = await function_run(select_fn_name, [node]);
  let item_to_add = js_visit_id_or_node(ast, n);
  let r = await function_current_selects_add(item_to_add, on_previous);
  return r;
}
