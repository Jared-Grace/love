import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_copy_delete(f_name_old, deleted) {
  marker("1");
  let split = string_split_comma(deleted);
  let parts = function_name_to_parts(f_name_old);
  let difference = list_difference(list, other);
  let f_name_new = string_replace(f_name_old, from, to);
  let v = await function_copy(f_name_old, f_name_new);
  return v;
}
