import { repo_path_combine } from "./repo_path_combine.mjs";
export function path_repo_about(repo) {
  let f_path = "data/given/settings/about.json";
  let a_path = repo_path_combine(repo, f_path);
  return a_path;
}
