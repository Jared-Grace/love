import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user_path } from "../../../love/public/src/folder_user_path.mjs";
export function folder_user_docs_path(file_name) {
  let p = folder_user_path();
  let result = path_join([p, "Documents\\", file_name]);
  return result;
}
