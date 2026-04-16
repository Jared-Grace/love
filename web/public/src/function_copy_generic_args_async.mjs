import { function_copy_generic_args } from "../../../love/public/src/function_copy_generic_args.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export async function function_copy_generic_args_async(
  plugin_fn,
  f_name_old_args_comma,
) {
  arguments_assert(arguments, 2);
  plugin_fn = function_name_combine.name;
  f_name_old_args_comma = text_combine_multiple([
    f_name_old_args_comma,
    ",",
    "async",
  ]);
  let r = await function_copy_generic_args(plugin_fn, f_name_old_args_comma);
  return r;
}
