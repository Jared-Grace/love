import { path_join } from "./path_join.mjs";
import { folder_previous } from "./folder_previous.mjs";
export function path_repo(repo_name) {
  let previous = folder_previous();
  let joined = path_join([previous, repo_name]);
  return joined;
}
