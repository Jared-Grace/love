import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_name_parts_remove_comma } from "../../../love/public/src/function_name_parts_remove_comma.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
export async function function_rename_parts_delete(f_name_old, deleted) {
  assert_arguments(arguments, 2);
  f_name_old = await function_name_unalias_only(f_name_old);
  let f_name_new = function_name_parts_remove_comma(f_name_old, deleted);
  let v = await function_rename(f_name_old, f_name_new);
  return v;
}
