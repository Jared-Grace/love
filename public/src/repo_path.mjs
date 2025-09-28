import { marker } from "./marker.mjs";
import { path_join } from "./path_join.mjs";
import { folder_previous } from "./folder_previous.mjs";
export function repo_path(repo_name) {
  marker("1");
  let previous = folder_previous();
  let r_path = path_join([previous, repo_name]);
  return r_path;
}
