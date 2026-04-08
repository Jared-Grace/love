import { js_unparse_or_self } from "../../../love/public/src/js_unparse_or_self.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_visit_id_or_node } from "../../../love/public/src/js_visit_id_or_node.mjs";
import { js_visit_id_to_node_or_id_multiple } from "../../../love/public/src/js_visit_id_to_node_or_id_multiple.mjs";
import { js_visit_id_to_node } from "../../../love/public/src/js_visit_id_to_node.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { data_transform } from "../../../love/public/src/data_transform.mjs";
import { user_data_path } from "../../../love/public/src/user_data_path.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
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
  async function lambda(previous) {
    list_add(previous, item_to_add);
    on_previous(previous);
    return previous;
  }
  let d_path = user_data_path();
  let value = await data_transform(
    "function_current_selects",
    [],
    lambda,
    d_path,
  );
  let selected = js_visit_id_to_node_or_id_multiple(value, ast);
  let selected_code = list_map(selected, js_unparse_or_self);
  let f_name_current = await function_current_get();
  let r = {
    f_name_current,
    value,
    selected,
    selected_code,
  };
  return r;
}
