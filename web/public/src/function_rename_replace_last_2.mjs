import { list_last } from "../../../love/public/src/list_last.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { function_rename_replace } from "../../../love/public/src/function_rename_replace.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_replace_last_2(f_name_before, to) {
  marker("1");
  let parts = function_name_to_parts(f_name_before);
  let from = list_last(parts);
  let v = await function_rename_replace(f_name_before, from, to);
  return v;
}
