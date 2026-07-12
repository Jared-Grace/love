import { file_name_json_folder_gitignore } from "./file_name_json_folder_gitignore.mjs";
export function user_data_path() {
  let name = "user";
  let f_path = file_name_json_folder_gitignore(name);
  return f_path;
}
