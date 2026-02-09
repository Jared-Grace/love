import { folder_user_storage_function_path_function } from "../../../love/public/src/folder_user_storage_function_path_function.mjs";
export function folder_user_storage_function_path(fn) {
  let joined = folder_user_storage_function_path_function() + fn.name;
  return joined;
}
