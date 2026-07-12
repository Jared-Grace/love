import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { function_name_parts_delete_comma } from "./function_name_parts_delete_comma.mjs";
import { function_rename_open } from "./function_rename_open.mjs";
export async function function_rename_parts_delete(f_name_old, deleted) {
  arguments_assert(arguments, 2);
  f_name_old = await function_name_unalias_only(f_name_old);
  let f_name_new = function_name_parts_delete_comma(f_name_old, deleted);
  let v = await function_rename_open(f_name_old, f_name_new);
  return v;
}
