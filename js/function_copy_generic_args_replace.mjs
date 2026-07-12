import { function_copy_open } from "./function_copy_open.mjs";
import { function_name_new_get_args } from "./function_name_new_get_args.mjs";
import { function_delete } from "./function_delete.mjs";
export async function function_copy_generic_args_replace(
  plugin_fn,
  args_comma,
) {
  let f_name_new = null;
  let f_name_old = null;
  ({ f_name_new, f_name_old } = await function_name_new_get_args(
    plugin_fn,
    args_comma,
  ));
  let result = await function_delete(f_name_new);
  let r = await function_copy_open(f_name_old, f_name_new);
  return r;
}
