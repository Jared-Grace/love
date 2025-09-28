import { path_join } from "./path_join.mjs";
import { folder_previous } from "./folder_previous.mjs";
export function path_repo(repo_name) {
  let previous2 = folder_previous();
  let joined = path_join([previous2, repo_name]);
  return joined;
}
