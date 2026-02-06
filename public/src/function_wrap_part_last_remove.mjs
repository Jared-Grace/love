import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_part_last_remove(f_name, suffix) {
  assert_arguments(arguments, 2);
  let unaliased = await function_name_unalias_only(f_name);
  let f_path = function_name_to_path(f_name2);
  let v = await function_wrap(unaliased, f_name_wrapped);
  return v;
}
