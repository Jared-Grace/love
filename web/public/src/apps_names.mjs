import { path_name } from "../../../love/public/src/path_name.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { apps_paths } from "../../../love/public/src/apps_paths.mjs";
export async function apps_names() {
  let aps = await apps_paths();
  let mapped = list_map(aps, path_name);
  return mapped;
}
