import { function_name_new_get_generic } from "../../../love/public/src/function_name_new_get_generic.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { list_concat_single } from "../../../love/public/src/list_concat_single.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
export async function function_name_new_get_args(plugin_fn, f_name_old, args) {
  let split = text_split_comma(args);
  let args_run = list_concat_single(f_name_old, split);
  ({ f_name_old, plugin_fn } = await function_name_new_get_generic(
    f_name_old,
    plugin_fn,
  ));
  let f_name_new = await function_run(plugin_fn, args_run);
  let r2 = {
    f_name_new,
    f_name_old,
  };
  return r2;
}
