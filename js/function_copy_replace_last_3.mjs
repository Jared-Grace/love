import { function_name_to_parts_last_3 } from "./function_name_to_parts_last_3.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_copy_replace } from "./function_copy_replace.mjs";
export async function function_copy_replace_last_3(f_name_old, to) {
  arguments_assert(arguments, 2);
  let from = function_name_to_parts_last_3(f_name_old);
  let v = await function_copy_replace(f_name_old, from, to);
  return v;
}
