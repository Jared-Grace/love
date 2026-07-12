import { function_run } from "./function_run.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
import { function_name_new_get_generic_overrides } from "./function_name_new_get_generic_overrides.mjs";
import { override_get } from "./override_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
export async function js_name_new_get_args_list(
  plugin_fn,
  list,
  name_old_transform,
) {
  let fr = list_first_remaining(list);
  let split = property_get(fr, "remaining");
  let name_old = property_get(fr, "first");
  name_old = await name_old_transform(name_old);
  plugin_fn = override_get(function_name_new_get_generic_overrides, plugin_fn);
  let args_run = list_concat_single(name_old, split);
  let name_new = await function_run(plugin_fn, args_run);
  let r = {
    name_new,
    name_old,
  };
  return r;
}
