import { html_regenerate_folders } from "./html_regenerate_folders.mjs";
import { html_regenerate_folder } from "./html_regenerate_folder.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_squash } from "./list_squash.mjs";
export async function html_regenerate_all() {
  "Writes every page here again, both the public ones and the dev ones, and names the ones it wrote.";
  let folders = html_regenerate_folders();
  let mapped = await list_map_unordered_async(folders, html_regenerate_folder);
  let regenerated = list_squash(mapped);
  return regenerated;
}
