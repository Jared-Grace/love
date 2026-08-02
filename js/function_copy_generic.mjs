import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_new_get_args } from "./function_name_new_get_args.mjs";
import { function_copy } from "./function_copy.mjs";
export async function function_copy_generic(plugin_fn, args_comma) {
  "Copies a fn to a name the plugin derives, and stops there";
  "The variant named for opening does this and then shows the human the result";
  arguments_assert(arguments, 2);
  let r = await function_name_new_apply_generic(
    plugin_fn,
    args_comma,
    function_copy,
  );
  return r;
}
