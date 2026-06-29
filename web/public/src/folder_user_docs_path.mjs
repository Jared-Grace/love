import { folder_user_path_join_generic } from "../../../love/public/src/folder_user_path_join_generic.mjs";
import { folder_user_path } from "../../../love/public/src/folder_user_path.mjs";
export function folder_user_docs_path(file_name) {
  let p = folder_user_path();
  const folder = "Documents";
  let result = folder_user_path_join_generic(p, folder, file_name);
  return result;
}
