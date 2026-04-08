import { function_run } from "../../../love/public/src/function_run.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function function_name_new_get(plugin_fn, f_name_old) {
  f_name_old = await function_name_unalias_only(f_name_old);
  let f_name_new = await function_run(plugin_fn, [f_name_old]);
  let r2 = {
    f_name_new,
    f_name_old,
  };
  return r2;
}
