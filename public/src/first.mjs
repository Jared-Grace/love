import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_name_to_part_first } from "../../../love/public/src/function_name_to_part_first.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_copy_replace } from "../../../love/public/src/function_copy_replace.mjs";
export async function first(f_name_old, to) {
  assert_arguments(arguments, 2);
  let unaliased = await function_name_unalias_only(f_name_new);
  let from = function_name_to_part_first(f_name_old);
  let r = await function_copy_replace(f_name_old, from, to);
  return r;
}
