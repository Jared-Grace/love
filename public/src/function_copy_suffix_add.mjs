import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
export async function function_copy_suffix_add(f_name_old, suffix) {
  assert_arguments(arguments, 2);
  let unaliased = await function_name_unalias_only(f_name_old);
  let combined = function_name_combine(unaliased, suffix);
  let v = await function_copy(unaliased, combined);
  return v;
}
