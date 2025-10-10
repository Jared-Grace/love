import { file_name_json_folder_gitignore } from "../../../karate_code/public/src/file_name_json_folder_gitignore.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function data_prompts_path() {
  marker("1");
  const name = "prompts";
  let f_path = file_name_json_folder_gitignore(name);
  return f_path;
}
