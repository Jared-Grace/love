import { folder_user_path_join } from "../../../love/public/src/folder_user_path_join.mjs";
export function folder_user_docs_path(file_name) {
  const folder = "Documents";
  let result = folder_user_path_join(folder, file_name);
  return result;
}
