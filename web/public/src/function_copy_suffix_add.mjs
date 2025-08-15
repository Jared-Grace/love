import { function_name_unalias } from "./function_name_unalias.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { function_copy } from "./function_copy.mjs";
export async function function_copy_suffix_add(f_name_old, suffix) {
  let unaliased = await function_name_unalias(f_name);
  let combined = function_name_combine(f_name_old, suffix);
  let v = await function_copy(f_name_old, combined);
  return v;
}
