import { path_join } from "../../../love/public/src/path_join.mjs";
import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
export function vite_path_for_config() {
  let p = folder_previous();
  let joined = path_join(segments);
  function_name_to_path(app_context_initialize.name);
}
