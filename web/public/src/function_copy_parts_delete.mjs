import { function_name_parts_remove_comma } from "../../../love/public/src/function_name_parts_remove_comma.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_copy_parts_delete(f_name_old, deleted) {
  let f_name_new = function_name_parts_remove_comma(f_name_old, deleted);
  let v = await function_copy(f_name_old, f_name_new);
  return v;
}
