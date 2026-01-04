import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_copy_delete(f_name_old, deleted) {
  marker("1");
  let parts = function_name_to_parts(f_name);
  let f_name_new = string_replace(f_name_old, from, to);
  let v = await function_copy(f_name_old, f_name_new);
  return v;
}
