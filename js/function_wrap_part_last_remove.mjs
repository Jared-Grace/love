import { function_name_parts_transform } from "./function_name_parts_transform.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_wrap } from "./function_wrap.mjs";
export async function function_wrap_part_last_remove(f_name) {
  arguments_assert(arguments, 1);
  let unaliased = await function_name_unalias_only(f_name);
  let combined = function_name_parts_transform(unaliased, list_remove_last);
  let v = await function_wrap(unaliased, combined);
  return v;
}
