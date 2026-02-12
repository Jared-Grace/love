import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
export async function function_new_suffix_add(f_name_existing) {
  let unaliased = await function_name_unalias_only(f_name_existing);
  let combined = function_name_combine(left, right);
  let r = await function_new(f_name_existing);
  return r;
}
