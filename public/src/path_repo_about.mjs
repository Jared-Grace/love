import { path_repo_combine } from "./path_repo_combine.mjs";
import { data_path_generic } from "./data_path_generic.mjs";
export function path_repo_about(repo) {
  let f_path = data_path_generic("", "about");
  let a_path = path_repo_combine(repo, f_path);
  return a_path;
}
