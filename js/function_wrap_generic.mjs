import { function_name_new_apply_generic } from "./function_name_new_apply_generic.mjs";
import { function_wrap_output_name } from "./function_wrap_output_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_wrap_generic(plugin_fn, args_comma) {
  "Wraps a fn under a name the plugin derives, and stops there";
  "The variant named for opening does this and then shows the human the result";
  arguments_assert(arguments, 2);
  let r = await function_name_new_apply_generic(
    plugin_fn,
    args_comma,
    function_wrap_output_name,
  );
  return r;
}
