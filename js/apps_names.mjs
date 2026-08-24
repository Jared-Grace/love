import { path_name } from "./path_name.mjs";
import { list_map } from "./list_map.mjs";
import { apps_page_file_names } from "./apps_page_file_names.mjs";
export async function apps_names() {
  "The name of every app here, taken from the folder each one lives in.";
  let aps = await apps_page_file_names();
  let ans = list_map(aps, path_name);
  return ans;
}
