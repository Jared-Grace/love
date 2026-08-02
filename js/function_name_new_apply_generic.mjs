import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_new_get_args } from "./function_name_new_get_args.mjs";
import { function_copy } from "./function_copy.mjs";
export async function function_name_new_apply_generic(
  plugin_fn,
  args_comma,
  apply_fn,
) {
  "Derives a new name for a fn from a plugin and hands both names to the fn that does the work";
  "The plugin is where the new name comes from and the last argument is what is then done with the pair, which is the whole of what the copy and wrap and rename commands differ by";
  "Old name first and new name second, the order every two-name function here already takes";
  arguments_assert(arguments, 3);
  let f_name_new = null;
  let f_name_old = null;
  ({ f_name_new, f_name_old } = await function_name_new_get_args(
    plugin_fn,
    args_comma,
  ));
  let r = await apply_fn(f_name_old, f_name_new);
  return r;
}
