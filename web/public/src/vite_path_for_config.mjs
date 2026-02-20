import { folder_previous_join } from "../../../love/public/src/folder_previous_join.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
export function vite_path_for_config(fn) {
  let path = function_name_to_path(fn.name);
  let joined = folder_previous_join(path);
  return joined;
}
