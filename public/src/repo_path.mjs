import { repos_folder } from "./repos_folder.mjs";
import { marker } from "./marker.mjs";
import { path_join } from "./path_join.mjs";
export function repo_path(repo_name) {
  marker("1");
  let previous = repos_folder();
  let r_path = path_join([previous, repo_name]);
  return r_path;
}
