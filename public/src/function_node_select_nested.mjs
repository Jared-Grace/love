import { list_remove_curried_right } from "../../../love/public/src/list_remove_curried_right.mjs";
import { function_current_selects_first } from "../../../love/public/src/function_current_selects_first.mjs";
import { function_current_ast } from "../../../love/public/src/function_current_ast.mjs";
import { function_node_select_inner } from "../../../love/public/src/function_node_select_inner.mjs";
export async function function_node_select_nested(select_fn_name) {
  let ast = await function_current_ast();
  let first_id = await function_current_selects_first();
  let r2 = list_remove_curried_right(first_id);
  let r = await function_node_select_inner(
    select_fn_name,
    first_id,
    r2,
    ast,
    args,
  );
  return r;
}
