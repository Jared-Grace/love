import { function_name_unalias } from "./function_name_unalias.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { function_copy } from "./function_copy.mjs";
export async function function_copy_suffix_add(f_name_old, suffix) {
  let unaliased = await function_name_unalias(f_name_old);
  let combined = function_name_combine(unaliased, suffix);
  let v = await function_copy(unaliased, combined);
  return v;
}
