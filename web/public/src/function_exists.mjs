import { file_exists } from "./file_exists.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
export async function function_exists(f_name) {
  let {f_path} = await function_name_to_path_unalias(f_name);
  return await file_exists(f_path);
}
