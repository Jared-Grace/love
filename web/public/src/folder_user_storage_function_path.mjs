import { folder_user_storage_path } from "../../../love/public/src/folder_user_storage_path.mjs";
export function folder_user_storage_function_path(fn) {
  let joined = folder_user_storage_path("function\\" + fn.name);
  return joined;
}
