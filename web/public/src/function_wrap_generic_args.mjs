import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_remaining_from_comma_dot } from "../../../love/public/src/list_first_remaining_from_comma_dot.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_name_new_get_args } from "../../../love/public/src/function_name_new_get_args.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_generic_args(
  plugin_fn,
  f_name_old_args_comma,
) {
  arguments_assert(arguments, 2);
  let fr = list_first_remaining_from_comma_dot(f_name_transformer_args_comma);
  let remaining = property_get(fr, "remaining");
  let f_name_transformer = property_get(fr, "first");
  let f_name_new = null;
  ({ f_name_new, f_name_old } = await function_name_new_get_args(
    plugin_fn,
    f_name_old,
    args,
  ));
  let r = await function_wrap(f_name_old, f_name_new);
  return r;
}
