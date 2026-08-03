import { property_get } from "./property_get.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { file_read } from "./file_read.mjs";
export async function function_read(f_name) {
  "Hands back the whole text of a function's file, found by the function's own name rather than by a path, so an alias reaches it too.";
  let v = await function_name_to_path_unalias(f_name);
  let f_path = property_get(v, "f_path");
  let contents = await file_read(f_path);
  return contents;
}
