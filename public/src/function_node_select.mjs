import { list_add } from "../../../love/public/src/list_add.mjs";
import { data_transform } from "../../../love/public/src/data_transform.mjs";
import { function_current_ast } from "../../../love/public/src/function_current_ast.mjs";
import { js_visit_id } from "../../../love/public/src/js_visit_id.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
export async function function_node_select(select_fn_name) {
  let ast = await function_current_ast();
  let result = await function_run(select_fn_name, [ast]);
  let id = js_visit_id(ast, result);
  async function lambda(previous) {
    list_add(previous, id);
  }
  let value = await data_transform(
    "function_current_selects",
    [],
    lambda,
    d_path,
  );
}
