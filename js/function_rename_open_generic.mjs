import { function_name_new_get_args } from "./function_name_new_get_args.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_rename_open } from "./function_rename_open.mjs";
export async function function_rename_open_generic(plugin_fn, args_comma) {
  arguments_assert(arguments, 2);
  ("Renames a fn to a name the plugin derives, and shows the human the result");
  let r = await function_name_new_apply_generic(
    plugin_fn,
    args_comma,
    function_rename_open,
  );
  return r;
}
