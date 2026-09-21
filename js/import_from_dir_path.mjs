import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { path_directory } from "./path_directory.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
import { repo_path } from "./repo_path.mjs";
export function import_from_dir_path(f_path) {
  arguments_assert(arguments, 1);
  let dir = path_directory(f_path);
  ("A file at an on-disk place answers with its own directory, which already spells absolute the way the dictionary does - joining the repo base on top of it doubles the base. Only a directory spelled relative to the repo root wants the base joined, and that is the other branch.");
  let absolute = dir.startsWith("/") || /^[a-zA-Z]:[\\/]/.test(dir);
  if (absolute) {
    return dir;
  }
  let repo_name = repo_current_name();
  let r_path = repo_path(repo_name);
  let from_dir = path_join([r_path, dir]);
  return from_dir;
}
