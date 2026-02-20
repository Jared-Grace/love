import { folder_previous_join } from "../../../love/public/src/folder_previous_join.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
export function vite_config_entry_path(fn) {
  let f_path = function_name_to_path(fn.name);
  let path = folder_previous_join(f_path);
  return path;
}
