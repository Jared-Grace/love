import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user_storage_function_path_function } from "../../../love/public/src/folder_user_storage_function_path_function.mjs";
export function folder_user_storage_function_path(fn) {
  let p = folder_user_storage_function_path_function();
  let joined = path_join([p, fn.name]);
  return joined;
}
