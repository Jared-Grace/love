import { function_copy } from "../../../love/public/src/function_copy.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_name_suffix_remove } from "../../../love/public/src/function_name_suffix_remove.mjs";
export async function function_copy_suffix_remove(f_name_before, suffix) {
  let unaliased = await function_name_unalias_only(f_name_before);
  let combined = function_name_suffix_remove(unaliased, suffix);
  let v = await function_copy(unaliased, combined);
  return v;
}
