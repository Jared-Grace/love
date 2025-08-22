import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { file_read } from "./file_read.mjs";
export async function function_read(f_name) {
  const { f_path } = await function_name_to_path_unalias(f_name);
  let v = await file_read(f_path);
  return v;
}
