import { function_name_to_part_last } from "../../../love/public/src/function_name_to_part_last.mjs";
import { function_rename_suffix_remove } from "../../../love/public/src/function_rename_suffix_remove.mjs";
export async function function_rename_suffix_remove_last(f_name_before) {
  let suffix = function_name_to_part_last(f_name_before);
  let v = await function_rename_suffix_remove(f_name_before, suffix);
  return v;
}
