import { function_name_new_get_args_list } from "./function_name_new_get_args_list.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
export async function function_name_new_get_args(plugin_fn, args_comma) {
  let list = text_split_comma_dot(args_comma);
  let r = await function_name_new_get_args_list(plugin_fn, list);
  return r;
}
