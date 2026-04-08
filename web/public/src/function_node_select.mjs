import { noop } from "../../../love/public/src/noop.mjs";
import { function_node_select_inner } from "../../../love/public/src/function_node_select_inner.mjs";
import { function_current_ast } from "../../../love/public/src/function_current_ast.mjs";
export async function function_node_select(select_fn_name) {
  let ast = await function_current_ast();
  let r = await function_node_select_inner(select_fn_name, ast, noop);
  return r;
}
