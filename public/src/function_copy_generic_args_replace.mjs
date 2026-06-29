import { function_delete } from "../../../love/public/src/function_delete.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { function_copy_generic_args } from "../../../love/public/src/function_copy_generic_args.mjs";
export async function function_copy_generic_args_replace(
  plugin_fn,
  args_comma,
) {
  let list = text_split_comma_dot(args_comma);
  let fr = list_first_remaining(list);
  let name_old = property_get(fr, "first");
  let result = await function_delete(name_old);
  let r = await function_copy_generic_args(plugin_fn, args_comma);
  return r;
}
