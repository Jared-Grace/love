import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_current_set } from "../../../love/public/src/function_current_set.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
export async function function_open(f_name) {
  const v = await function_name_to_path_unalias(f_name);
  let f_path = property_get(v, "f_path");
  await file_open(f_path);
  await function_current_set(f_name);
}
