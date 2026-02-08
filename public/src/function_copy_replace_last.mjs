import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_name_to_part_last } from "../../../love/public/src/function_name_to_part_last.mjs";
import { function_copy_replace } from "../../../love/public/src/function_copy_replace.mjs";
export async function function_copy_replace_last(f_name_old, to) {
  assert_arguments(arguments, 2);
  let unaliased = await function_name_unalias_only(f_name_old);
  let from = function_name_to_part_last(unaliased);
  let v = await function_copy_replace(unaliased, from, to);
  return v;
}
