import { function_copy_open } from "../../../love/public/src/function_copy_open.mjs";
import { function_name_new_get_args } from "../../../love/public/src/function_name_new_get_args.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
export async function function_copy_generic_args_replace(
  plugin_fn,
  args_comma,
) {
  let list = text_split_comma_dot(args_comma);
  let fr = list_first_remaining(list);
  let name_old = property_get(fr, "first");
  let result = await function_delete(name_old);
  arguments_assert(arguments, 2);
  let f_name_new = null;
  let f_name_old = null;
  ({ f_name_new, f_name_old } = await function_name_new_get_args(
    plugin_fn,
    args_comma,
  ));
  let r = await function_copy_open(f_name_old, f_name_new);
  return r;
}
