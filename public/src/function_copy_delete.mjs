import { function_name_parts_remove } from "../../../love/public/src/function_name_parts_remove.mjs";
import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_copy_delete(f_name_old, deleted) {
  marker("1");
  let split = string_split_comma(deleted);
  let f_name_new = function_name_parts_remove(f_name_old, split);
  let v = await function_copy(f_name_old, f_name_new);
  return v;
}
