import { file_name_json_folder_gitignore } from "../../../love/public/src/file_name_json_folder_gitignore.mjs";
export function user_data_path() {
  const name = "user";
  let f_path = file_name_json_folder_gitignore(name);
  return f_path;
}
