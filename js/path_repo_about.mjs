import { repo_path_combine } from "./repo_path_combine.mjs";
import { data_path_generic } from "./data_path_generic.mjs";
export function path_repo_about(repo) {
  let f_path = data_path_generic("", "about");
  let a_path = repo_path_combine(repo, f_path);
  return a_path;
}
