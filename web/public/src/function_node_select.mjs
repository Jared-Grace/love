import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_visit_ids_to_nodes } from "../../../love/public/src/js_visit_ids_to_nodes.mjs";
import { user_repo_path } from "../../../love/public/src/user_repo_path.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { data_transform } from "../../../love/public/src/data_transform.mjs";
import { function_current_ast } from "../../../love/public/src/function_current_ast.mjs";
import { js_visit_id } from "../../../love/public/src/js_visit_id.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
export async function function_node_select(select_fn_name) {
  let ast = await function_current_ast();
  let node = await function_run(select_fn_name, [ast]);
  let id = js_visit_id(ast, node);
  async function lambda(previous) {
    list_add(previous, id);
    return previous;
  }
  let d_path = user_repo_path();
  let value = await data_transform(
    "function_current_selects",
    [],
    lambda,
    d_path,
  );
  let selected = js_visit_ids_to_nodes(ast, value);
  let selected_code = list_map(selected, js_unparse);
  return selected_code;
}
