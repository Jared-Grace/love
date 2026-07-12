import { folder_previous } from "./folder_previous.mjs";
import { path_join } from "./path_join.mjs";
import { data_folder } from "./data_folder.mjs";
import { file_name_json_folder } from "./file_name_json_folder.mjs";
import { folder_vscode } from "./folder_vscode.mjs";
export function love_repo_initialize_paths() {
  let vc = folder_vscode();
  let f_path = file_name_json_folder(vc, "tasks");
  let d_path = data_folder();
  let file_path_old = path_join([d_path, f_path]);
  let previous = folder_previous();
  let file_path_new = path_join([previous, f_path]);
  let r = {
    file_path_old,
    file_path_new,
  };
  return r;
}
