import { file_open } from "../../../love/public/src/file_open.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
export async function function_move_open(f_name_before, f_name_after) {
  let r = await function_copy(f_name_before, f_name_after);
  let name = property_get(r, "name");
  let f_path_new = property_get(r, "f_path_new");
  await file_open(f_path_new);
  await function_delete(f_name_before);
}
