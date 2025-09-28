import { file_name_json_folder } from "./file_name_json_folder.mjs";
export function user_repo_path() {
  let f_path = file_name_json_folder("gitignore", "user");
  return f_path;
}
