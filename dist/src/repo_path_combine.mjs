import { path_join } from "../../../love/public/src/path_join.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
export function repo_path_combine(repo_name, f_path) {
  let folder_name = repo_path(repo_name);
  let combined = path_join([folder_name, f_path]);
  return combined;
}
