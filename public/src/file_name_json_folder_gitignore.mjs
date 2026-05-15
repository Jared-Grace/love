import { folder_gitignore_join } from "../../../love/public/src/folder_gitignore_join.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
export function file_name_json_folder_gitignore(name) {
  let joined = folder_gitignore_join(name);
  let f_path = file_name_json(joined);
  return f_path;
}
