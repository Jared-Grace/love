import { function_name_unalias_combine } from "../../../love/public/src/function_name_unalias_combine.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
export async function function_new_suffix_add(f_name_existing, suffix) {
  let combined = await function_name_unalias_combine(f_name_existing, suffix);
  let r = await function_new(combined);
  return r;
}
