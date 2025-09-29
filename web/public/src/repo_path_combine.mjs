import { path_join } from "./path_join.mjs";
import { repo_path } from "./repo_path.mjs";
export function repo_path_combine(repo_name, f_path) {
  let folder_name = repo_path(repo_name);
  let combined = path_join([folder_name, f_path]);
  return combined;
}
