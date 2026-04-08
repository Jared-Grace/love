import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_generic(plugin_fn, f_name_old, args) {
  f_name_old = await function_name_unalias_only(f_name_old);
  let split = text_split_comma(args);
  let args_run = [f_name_old, args];
  let f_name_new = await function_run(plugin_fn, [f_name_old, args]);
  let r = await function_wrap(f_name_old, f_name_new);
  return r;
}
