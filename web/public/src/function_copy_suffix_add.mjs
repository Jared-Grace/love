import { function_name_combine } from "./function_name_combine.mjs";
import { function_copy } from "./function_copy.mjs";
export async function function_copy_suffix_add(f_name_old, suffix) {
  let combined = function_name_combine(f_name_old, suffix);
  return await function_copy(f_name_old, combined);
}
