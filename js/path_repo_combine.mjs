import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export function path_repo_combine(repo, f_path) {
  let r_path = repo_path(repo);
  let joined = path_join([r_path, f_path]);
  return joined;
}
