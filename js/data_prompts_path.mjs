import { file_name_json_folder_gitignore } from "./file_name_json_folder_gitignore.mjs";
export function data_prompts_path() {
  let name = "prompts";
  let f_path = file_name_json_folder_gitignore(name);
  return f_path;
}
