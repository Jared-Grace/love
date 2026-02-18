import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
export async function function_copy_open(f_name_old, f_name_new) {
  let r = await function_copy(f_name_old, f_name_new);
  let name = property_get(r, "name");
  let f_path_new = property_get(r, "f_path_new");
  await file_open(f_path_new);
  return name;
}
