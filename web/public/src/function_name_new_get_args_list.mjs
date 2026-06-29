import { function_name_new_get_generic_overrides } from "../../../love/public/src/function_name_new_get_generic_overrides.mjs";
import { override_get } from "../../../love/public/src/override_get.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { list_concat_single } from "../../../love/public/src/list_concat_single.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
export async function function_name_new_get_args_list(plugin_fn, list) {
  let name_old_transform = function_name_unalias_only;
  let fr = list_first_remaining(list);
  let split = property_get(fr, "remaining");
  let f_name_old = property_get(fr, "first");
  f_name_old = await name_old_transform(f_name_old);
  plugin_fn = override_get(function_name_new_get_generic_overrides, plugin_fn);
  let args_run = list_concat_single(f_name_old, split);
  let f_name_new = await function_run(plugin_fn, args_run);
  let r = {
    f_name_new,
    f_name_old,
  };
  return r;
}
