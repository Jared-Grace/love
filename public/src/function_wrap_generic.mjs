import { function_read } from "../../../love/public/src/function_read.mjs";
import { function_name_parts_remove_comma } from "../../../love/public/src/function_name_parts_remove_comma.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_generic(plugin_fn, f_name_old, deleted) {
  f_name_old = await function_name_unalias_only(f_name_old);
  let contents = await function_read(f_name2);
  let f_name_new = function_name_parts_remove_comma(f_name_old, deleted);
  let r = await function_wrap(f_name, f_name_wrapped);
  return r;
}
