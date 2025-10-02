import { repo_path_combine } from "../../../love/public/src/repo_path_combine.mjs";
import { functions_path } from "../../../love/public/src/functions_path.mjs";
export function repo_functions_path(repo_name) {
  let path = functions_path();
  let r_path = repo_path_combine(repo_name, path);
  return r_path;
}
