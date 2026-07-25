import { override_get } from "./override_get.mjs";
import { function_name_new_get_generic_overrides } from "./function_name_new_get_generic_overrides.mjs";
import { function_name_new_plugin_seam_assert } from "./function_name_new_plugin_seam_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_name_new_get_args_list } from "./js_name_new_get_args_list.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
export async function function_name_new_get_args_list(plugin_fn, list) {
  plugin_fn = override_get(function_name_new_get_generic_overrides, plugin_fn);
  function_name_new_plugin_seam_assert(plugin_fn);
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
