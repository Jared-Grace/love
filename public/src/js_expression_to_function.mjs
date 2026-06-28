import { function_name_new_get_args_list } from "../../../love/public/src/function_name_new_get_args_list.mjs";
import { function_new_expression } from "../../../love/public/src/function_new_expression.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export async function js_expression_to_function(ast, selects, args) {
  let r2 = await function_name_new_get_args_list(
    plugin_fn,
    f_name_old_args_comma,
  );
  let node = list_single(selects);
  await function_new_expression(f_name, node);
}
