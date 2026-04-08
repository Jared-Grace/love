import { function_name_parts_delete_comma } from "../../../love/public/src/function_name_parts_delete_comma.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_parts_delete(f_name, deleted) {
  let f_name_old = await function_name_unalias_only(f_name_old);
  let f_name_new = function_name_parts_delete_comma(f_name_old, deleted);
  let r = await function_wrap(f_name, f_name_new);
  return r;
}
