import { folder_current_logical } from "./folder_current_logical.mjs";
import { repos_folder } from "./repos_folder.mjs";
import { path_join } from "./path_join.mjs";
export function repo_path(repo_name) {
  "Where a repo beside this one lives, spelled absolute from the folder this process was started in as the person spelled it - so that when this repo is reached through a link into another tree the way to a neighbour points beside the copy the person works in, not beside the original the link points through to.";
  let here = folder_current_logical();
  let previous = repos_folder();
  let r_path = path_join([here, previous, repo_name]);
  return r_path;
}
