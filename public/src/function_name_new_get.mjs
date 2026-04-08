import { function_run } from "../../../love/public/src/function_run.mjs";
import { list_concat_single } from "../../../love/public/src/list_concat_single.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function function_name_new_get(plugin_fn, f_name_old, args) {
  f_name_old = await function_name_unalias_only(f_name_old);
  let split = text_split_comma(args);
  let args_run = list_concat_single(f_name_old, split);
  let f_name_new = await function_run(plugin_fn, args_run);
  let r2 = {
    f_name_new,
    f_name_old,
  };
  return r2;
}
