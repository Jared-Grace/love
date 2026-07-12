import { function_name_parts_delete } from "./function_name_parts_delete.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { functions_rename_generic_starts_with } from "./functions_rename_generic_starts_with.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function functions_rename_if_starts_with_parts_delete(
  f_name_prefix_before,
  deleted,
) {
  arguments_assert(arguments, 2);
  let split = text_split_comma(deleted);
  await functions_rename_generic_starts_with(name_change, f_name_prefix_before);
  function name_change(f_name_old) {
    let f_name_new = function_name_parts_delete(f_name_old, split);
    return f_name_new;
  }
}
