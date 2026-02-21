import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_name_to_part_last } from "../../../love/public/src/function_name_to_part_last.mjs";
import { function_rename_replace } from "../../../love/public/src/function_rename_replace.mjs";
export async function function_rename_replace_last(f_name_before, to) {
  arguments_assert(arguments, 2);
  let from = function_name_to_part_last(f_name_before);
  let v = await function_rename_replace(f_name_before, from, to);
  return v;
}
