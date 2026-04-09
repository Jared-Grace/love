import { js_visit_id } from "../../../love/public/src/js_visit_id.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { function_node_select_inner } from "../../../love/public/src/function_node_select_inner.mjs";
import { function_current_ast } from "../../../love/public/src/function_current_ast.mjs";
export async function function_node_select_args(select_fn_name, args_comma) {
  let ast = await function_current_ast();
  let id = js_visit_id(ast, ast);
  let r = await function_node_select_inner(
    select_fn_name,
    id,
    noop,
    ast,
    args_comma,
  );
  return r;
}
