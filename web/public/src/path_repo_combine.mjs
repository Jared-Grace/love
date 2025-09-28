import { path_join } from "./path_join.mjs";
import { path_repo } from "./path_repo.mjs";
export function path_repo_combine(repo, f_path) {
  let r_path = path_repo(repo);
  let joined = path_join([r_path, f_path]);
  return joined;
}
