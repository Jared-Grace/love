import { repo_path } from "./repo_path.mjs";
import { path_join } from "./path_join.mjs";
export function path_repo_combine(repo, f_path) {
  let r_path = repo_path(repo);
  let joined = path_join([r_path, f_path]);
  return joined;
}
