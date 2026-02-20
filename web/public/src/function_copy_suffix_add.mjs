import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_copy_open } from "../../../love/public/src/function_copy_open.mjs";
export async function function_copy_suffix_add(f_name_old, suffix) {
  arguments_assert(arguments, 2);
  let unaliased = await function_name_unalias_only(f_name_old);
  let combined = function_name_combine(unaliased, suffix);
  let v = await function_copy_open(unaliased, combined);
  return v;
}
