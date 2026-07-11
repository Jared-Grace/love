import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_name_to_parts_last_ } from "../../../love/public/src/function_name_to_parts_last_2.mjs";
import { function_rename_replace } from "../../../love/public/src/function_rename_replace.mjs";
export async function function_rename_replace_last_(f_name_before, to) {
  f_name_before = await function_name_unalias_only(f_name_before);
  let from = function_name_to_parts_last_(f_name_before);
  let v = await function_rename_replace(f_name_before, from, to);
  return v;
}
