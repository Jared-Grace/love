import { folder_user_path_join_generic } from "./folder_user_path_join_generic.mjs";
import { folder_user_path } from "./folder_user_path.mjs";
export function folder_user_path_join(folder, file_name) {
  let p = folder_user_path();
  let result = folder_user_path_join_generic(p, folder, file_name);
  return result;
}
