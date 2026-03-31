import { folder_user } from "../../../love/public/src/folder_user.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export function local_function_path(fn, file_name) {
  let joined2 = path_join(["storage", "function", fn.name, file_name]);
  joined2=folder_user(joined2);
  return joined2;
}
