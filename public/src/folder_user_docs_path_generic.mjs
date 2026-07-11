import { folder_user_path_join_generic } from "../../../love/public/src/folder_user_path_join_generic.mjs";
export function folder_user_docs_path_generic(p, file_name) {
  let folder = "Documents";
  let result = folder_user_path_join_generic(p, folder, file_name);
  return result;
}
