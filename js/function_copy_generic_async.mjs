import { function_copy_generic } from "./function_copy_generic.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_copy_generic_async(f_name_old_args_comma) {
  arguments_assert(arguments, 1);
  let plugin_fn = function_name_combine.name;
  f_name_old_args_comma = text_combine_multiple([
    f_name_old_args_comma,
    ",",
    "async",
  ]);
  let r = await function_copy_generic(plugin_fn, f_name_old_args_comma);
  return r;
}
