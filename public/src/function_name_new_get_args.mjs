import { function_name_new_get_args_list } from "../../../love/public/src/function_name_new_get_args_list.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
export async function function_name_new_get_args(
  plugin_fn,
  f_name_old_args_comma,
) {
  let list = text_split_comma_dot(f_name_old_args_comma);
  let r = await function_name_new_get_args_list(list, plugin_fn);
  return r;
}
