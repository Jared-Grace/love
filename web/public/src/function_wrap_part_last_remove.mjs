import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_part_last_remove(f_name) {
  assert_arguments(arguments, 1);
  let unaliased = await function_name_unalias_only(f_name);
  let parts = function_name_to_parts(unaliased);
  list_remove_last(parts);
  let combined = function_name_combine_multiple(parts2);
  let v = await function_wrap(unaliased, f_name_wrapped);
  return v;
}
