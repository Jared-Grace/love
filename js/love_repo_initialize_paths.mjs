import { data_given_machine_folder } from "./data_given_machine_folder.mjs";
import { folder_current_logical } from "./folder_current_logical.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json_folder } from "./file_name_json_folder.mjs";
import { folder_vscode } from "./folder_vscode.mjs";
export function love_repo_initialize_paths() {
  "Both paths are spelled absolute, built out of the folder this process was started in as the person spelled it - not as the kernel has resolved it - so that when this repo is reached through a link into another tree, everything lands beside the copy of it the person actually works in, rather than beside the original the link points through to.";
  "Relative paths would resolve against the process's real working folder, which a boot step has already fixed to the original tree before this function ever runs. Spelled absolute from the start, the '../' out of the repo cancels with the repo's own name and reaches the working tree's own parent.";
  let here = folder_current_logical();
  let vc = folder_vscode();
  let f_path = file_name_json_folder(vc, "tasks");
  let d_path = data_given_machine_folder();
  let file_path_old = path_join([here, d_path, f_path]);
  let previous = folder_previous();
  let file_path_new = path_join([here, previous, f_path]);
  let r = {
    file_path_old,
    file_path_new,
  };
  return r;
}
