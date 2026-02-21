import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_name_to_part_first } from "../../../love/public/src/function_name_to_part_first.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_copy_replace } from "../../../love/public/src/function_copy_replace.mjs";
export async function function_copy_replace_first(f_name_old, to) {
  arguments_assert(arguments, 2);
  let unaliased = await function_name_unalias_only(f_name_old);
  let from = function_name_to_part_first(unaliased);
  let r = await function_copy_replace(unaliased, from, to);
  return r;
}
