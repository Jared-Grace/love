import { function_current_set } from "./function_current_set.mjs";
import { property_get } from "./property_get.mjs";
import { function_copy } from "./function_copy.mjs";
import { file_open } from "./file_open.mjs";
export async function function_copy_open(f_name_old, f_name_new) {
  let r = await function_copy(f_name_old, f_name_new);
  let name = property_get(r, "name");
  let f_path_new = property_get(r, "f_path_new");
  await file_open(f_path_new);
  await function_current_set(name);
  return name;
}
