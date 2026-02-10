import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
export async function function_read(f_name) {
  const v = await function_name_to_path_unalias(f_name);
  let f_path = property_get(v, "f_path");
  let contents = await file_read(f_path);
  return contents;
}
