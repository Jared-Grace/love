import { function_name_new_get_args } from "./function_name_new_get_args.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_rename_open } from "./function_rename_open.mjs";
export async function function_rename_open_generic_args(plugin_fn, args_comma) {
  arguments_assert(arguments, 2);
  let f_name_new = null;
  let f_name_old = null;
  ({ f_name_new, f_name_old } = await function_name_new_get_args(
    plugin_fn,
    args_comma,
  ));
  let r = await function_rename_open(f_name_old, f_name_new);
  return r;
}
