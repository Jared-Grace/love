import { folder_previous_join } from "../../../love/public/src/folder_previous_join.mjs";
import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
export function vite_path_for_config() {
  let path = function_name_to_path(app_context_initialize.name);
  let joined = folder_previous_join(path);
  return joined;
}
