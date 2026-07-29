import { fn_name } from "./fn_name.mjs";
import { function_copy_generic_open } from "./function_copy_generic_open.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_copy_generic_async(f_name_old_args_comma) {
  arguments_assert(arguments, 1);
  let plugin_fn = fn_name("function_name_combine");
  f_name_old_args_comma = text_combine_multiple([
    f_name_old_args_comma,
    ",",
    "async",
  ]);
  let r = await function_copy_generic_open(plugin_fn, f_name_old_args_comma);
  return r;
}
