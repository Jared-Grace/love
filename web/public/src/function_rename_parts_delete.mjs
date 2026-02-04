import { function_name_parts_remove_comma } from "../../../love/public/src/function_name_parts_remove_comma.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_parts_delete(f_name_old, deleted) {
  marker("1");
  let f_name_new = function_name_parts_remove_comma(deleted, f_name_old);
  let v = await function_rename(f_name_old, f_name_new);
  return v;
}
