import { js__name_new_get_args_list } from "../../../love/public/src/js__name_new_get_args_list.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function function_name_new_get_args_list(plugin_fn, list) {
  let name_old_transform = function_name_unalias_only;
  let r = await js__name_new_get_args_list(list, name_old_transform, plugin_fn);
  return r;
}
