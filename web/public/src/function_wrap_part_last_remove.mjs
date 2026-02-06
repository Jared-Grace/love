import { function_name_parts_transform } from "../../../love/public/src/function_name_parts_transform.mjs";
import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_part_last_remove(f_name) {
  assert_arguments(arguments, 1);
  let unaliased = await function_name_unalias_only(f_name);
  let fn = list_remove_last;
  let combined = function_name_parts_transform(unaliased, fn);
  let v = await function_wrap(unaliased, combined);
  return v;
}
