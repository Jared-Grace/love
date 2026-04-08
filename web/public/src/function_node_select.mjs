import { js_visit_id } from "../../../love/public/src/js_visit_id.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
export async function function_node_select(select_fn_name) {
  let f_name_current = await function_current_get();
  let ast = await function_ast(f_name_current);
  let result = await function_run(select_fn_name, [ast]);
  let r = js_visit_id(ast, first);
}
