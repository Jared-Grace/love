import { null_is } from "../../../love/public/src/null_is.mjs";
import { js_visit_id_try } from "../../../love/public/src/js_visit_id_try.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { js_unparse_multiple } from "../../../love/public/src/js_unparse_multiple.mjs";
import { js_visit_ids_to_nodes } from "../../../love/public/src/js_visit_ids_to_nodes.mjs";
import { data_transform } from "../../../love/public/src/data_transform.mjs";
import { user_data_path } from "../../../love/public/src/user_data_path.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
export async function function_node_select_inner(
  select_fn_name,
  ast,
  on_previous,
) {
  let node = await function_run(select_fn_name, [ast]);
  let item_to_add = js_visit_id_try(ast, node);
  if (null_is(item_to_add)) {
    item_to_add = ast;
  }
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
  let selected = js_visit_ids_to_nodes(ast, value);
  let selected_code = js_unparse_multiple(selected);
  let f_name_current = await function_current_get();
  let r = {
    f_name_current,
    selected_code,
  };
  return r;
}
