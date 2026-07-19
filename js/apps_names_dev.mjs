import { path_name } from "./path_name.mjs";
import { list_map } from "./list_map.mjs";
import { apps_paths_dev } from "./apps_paths_dev.mjs";
export async function apps_names_dev() {
  ("the same shape as apps_names, over the apps that have a dev build");
  let aps = await apps_paths_dev();
  let ans = list_map(aps, path_name);
  return ans;
}
