import { folder_user_storage_path } from "./folder_user_storage_path.mjs";
import { path_join } from "./path_join.mjs";
export function local_function_path(fn, file_name) {
  let joined2 = path_join(["function", fn.name, file_name]);
  let joined = folder_user_storage_path(joined2);
  return joined;
}
