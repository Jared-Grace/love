import { function_name_new_get_args } from "../../../love/public/src/function_name_new_get_args.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_rename_open } from "../../../love/public/src/function_rename_open.mjs";
export async function function_rename_open_generic(
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
  let r = await function_rename_open(f_name_before, f_name_after);
  return r;
}
