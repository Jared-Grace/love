import { list_remove_last } from "./list_remove_last.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
import { function_copy_open } from "./function_copy_open.mjs";
export async function function_copy_remove_last(f_name_before) {
  let parts = function_name_to_parts(f_name_before);
  list_remove_last(parts);
  let f_name_after = function_name_combine_multiple(parts);
  let v = await function_copy_open(f_name_before, f_name_after);
  return v;
}
