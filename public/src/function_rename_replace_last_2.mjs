import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { list_slice_end } from "../../../love/public/src/list_slice_end.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { function_rename_replace } from "../../../love/public/src/function_rename_replace.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_replace_last_2(f_name_before, to) {
  marker("1");
  let parts = function_name_to_parts(f_name_before);
  let result = list_slice_end(parts, 2);
  let combined = function_name_combine_multiple(parts2);
  let v = await function_rename_replace(f_name_before, from, to);
  return v;
}
