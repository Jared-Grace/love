import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
import { function_name_to_part_last } from "../../../love/public/src/function_name_to_part_last.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
export async function function_copy_remove_last(f_name_before) {
  let suffix = function_name_to_part_last(f_name_before);
  let separator = function_name_separator();
  let combined = function_name_combine_multiple(parts);
  let v = await function_copy(
    f_name_before,
    f_name_before + separator + "" + suffix,
  );
  return v;
}
