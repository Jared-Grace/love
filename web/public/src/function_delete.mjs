import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_delete } from "./file_delete.mjs";
export async function function_delete(f_name) {
  const f_path = function_name_to_path(f_name);
  await file_delete(f_path);
}
