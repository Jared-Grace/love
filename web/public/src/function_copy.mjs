import { file_copy } from "./file_copy.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_open } from "./file_open.mjs";
export async function function_copy(f_name_old, f_name_new) {
  const f_path_new = await function_name_to_path(f_name_new);
  await file_copy(function_name_to_path(f_name_old), f_path_new);
  await file_open(f_path_new);
}
