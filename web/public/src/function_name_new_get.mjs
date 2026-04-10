import { function_name_new_get_generic } from "../../../love/public/src/function_name_new_get_generic.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
export async function function_name_new_get(plugin_fn, f_name_old) {
  ({ f_name_old, plugin_fn } = await function_name_new_get_generic(
    f_name_old,
    plugin_fn,
  ));
  let f_name_new = await function_run(plugin_fn, [f_name_old]);
  let r2 = {
    f_name_new,
    f_name_old,
  };
  return r2;
}
