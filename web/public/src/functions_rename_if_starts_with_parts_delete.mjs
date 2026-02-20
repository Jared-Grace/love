import { function_name_parts_remove } from "../../../love/public/src/function_name_parts_remove.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { functions_rename_generic_starts_with } from "../../../love/public/src/functions_rename_generic_starts_with.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export async function functions_rename_if_starts_with_parts_delete(
  f_name_prefix_before,
  deleted,
) {
  arguments_assert(arguments, 2);
  let split = text_split_comma(deleted);
  await functions_rename_generic_starts_with(name_change, f_name_prefix_before);
  function name_change(f_name_old) {
    let f_name_new = function_name_parts_remove(f_name_old, split);
    return f_name_new;
  }
}
