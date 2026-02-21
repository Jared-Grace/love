import { function_copy_open } from "../../../love/public/src/function_copy_open.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_name_suffix_remove } from "../../../love/public/src/function_name_suffix_remove.mjs";
export async function function_copy_suffix_remove(f_name_before, suffix) {
  let unaliased = await function_name_unalias_only(f_name_before);
  let combined = function_name_suffix_remove(unaliased, suffix);
  let v = await function_copy_open(unaliased, combined);
  return v;
}
