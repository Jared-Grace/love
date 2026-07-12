import { folder_user_docs_path_generic } from "./folder_user_docs_path_generic.mjs";
import { folder_user_path_previous } from "./folder_user_path_previous.mjs";
export function folder_user_docs_path_previous(file_name) {
  let p = folder_user_path_previous();
  let result = folder_user_docs_path_generic(p, file_name);
  return result;
}
