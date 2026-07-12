import { repo_path_combine } from "./repo_path_combine.mjs";
import { functions_path } from "./functions_path.mjs";
export function repo_functions_path(repo_name) {
  let path = functions_path();
  let r_path = repo_path_combine(repo_name, path);
  return r_path;
}
