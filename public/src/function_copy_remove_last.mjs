import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
export async function function_copy_remove_last(f_name_before) {
  let parts = function_name_to_parts(f_name_before, removals);
  let removed = list_remove_last(parts);
  let f_name_after = function_name_combine_multiple(parts);
  let v = await function_copy(f_name_before, f_name_after);
  return v;
}
