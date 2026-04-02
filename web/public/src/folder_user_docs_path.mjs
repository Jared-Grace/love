import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user_path } from "../../../love/public/src/folder_user_path.mjs";
export function folder_user_docs_path(file_name) {
  let p = folder_user_path() + "Documents\\" + file_name;
  let result = path_join(segments);
  return p;
}
