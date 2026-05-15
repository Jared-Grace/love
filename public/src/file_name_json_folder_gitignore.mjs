import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_gitignore_name } from "../../../love/public/src/folder_gitignore_name.mjs";
export function file_name_json_folder_gitignore(name) {
  let folder = folder_gitignore_name();
  let joined = path_join([folder, name]);
  let f_path = file_name_json(joined);
  return f_path;
}
