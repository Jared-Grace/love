import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_name_new_get_args_list } from "../../../love/public/src/js_name_new_get_args_list.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function function_name_new_get_args_list(plugin_fn, list) {
  let name_old_transform = function_name_unalias_only;
  let r2 = await js_name_new_get_args_list(plugin_fn, list, name_old_transform);
  let f_name_old = property_get(r2, "name_old");
  let f_name_new = property_get(r2, "name_new");
  let r = {
    f_name_old,
    f_name_new,
  };
  return r;
}
