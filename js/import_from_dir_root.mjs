import { path_join } from "./path_join.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
import { folder_src } from "./folder_src.mjs";
export function import_from_dir_root() {
  let r = path_join([folder_previous(), repo_current_name(), folder_src()]);
  return r;
}
