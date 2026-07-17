import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { path_directory } from "./path_directory.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
export function import_from_dir_path(f_path) {
  arguments_assert(arguments, 1);
  let dir = path_directory(f_path);
  let from_dir = path_join([folder_previous(), repo_current_name(), dir]);
  return from_dir;
}
