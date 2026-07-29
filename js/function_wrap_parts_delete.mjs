import { function_name_parts_delete_comma } from "./function_name_parts_delete_comma.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { function_wrap_open } from "./function_wrap_open.mjs";
export async function function_wrap_parts_delete(f_name, deleted) {
  let f_name_old = await function_name_unalias_only(f_name);
  let f_name_new = function_name_parts_delete_comma(f_name_old, deleted);
  let r = await function_wrap_open(f_name, f_name_new);
  return r;
}
