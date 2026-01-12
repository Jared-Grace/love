import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
import { function_name_to_part_last } from "../../../love/public/src/function_name_to_part_last.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_copy_remove_last(f_name_old) {
  let suffix = function_name_to_part_last(f_name_before);
  let separator = function_name_separator();
  marker("1");
  let v = await function_copy(f_name_old, separator + "" + suffix);
  return v;
}
