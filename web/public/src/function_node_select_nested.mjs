import { list_first } from "../../../love/public/src/list_first.mjs";
import { user_data_get } from "../../../love/public/src/user_data_get.mjs";
import { function_node_select_inner } from "../../../love/public/src/function_node_select_inner.mjs";
export async function function_node_select_nested(select_fn_name) {
  let selects = await user_data_get("function_current_selects");
  let first = list_first(selects);
  function lambda(previous) {}
  let r = await function_node_select_inner(select_fn_name, first, lambda);
  return r;
}
