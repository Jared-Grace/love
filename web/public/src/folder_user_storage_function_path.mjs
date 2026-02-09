import { folder_user_storage_function_path_fn } from "../../../love/public/src/folder_user_storage_function_path_fn.mjs";
export function folder_user_storage_function_path(fn) {
  let joined = folder_user_storage_function_path_fn() + fn.name;
  return joined;
}
