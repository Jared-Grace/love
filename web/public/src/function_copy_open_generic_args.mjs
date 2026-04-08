import { function_name_new_get_args } from "../../../love/public/src/function_name_new_get_args.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_copy_open } from "../../../love/public/src/function_copy_open.mjs";
export async function function_copy_open_generic_args(
  plugin_fn,
  f_name_old,
  args,
) {
  arguments_assert(arguments, 3);
  let f_name_new = null;
  ({ f_name_new, f_name_old } = await function_name_new_get_args(
    plugin_fn,
    f_name_old,
    args,
  ));
  let r = await function_copy_open(f_name_old, f_name_new);
  return r;
}
