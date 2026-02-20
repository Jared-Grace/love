import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_name_parts_remove_comma } from "../../../love/public/src/function_name_parts_remove_comma.mjs";
import { function_rename_open } from "../../../love/public/src/function_rename_open.mjs";
export async function function_rename_parts_delete(f_name_old, deleted) {
  arguments_assert(arguments, 2);
  f_name_old = await function_name_unalias_only(f_name_old);
  let f_name_new = function_name_parts_remove_comma(f_name_old, deleted);
  let v = await function_rename_open(f_name_old, f_name_new);
  return v;
}
