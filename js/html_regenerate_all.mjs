import { folder_public } from "./folder_public.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { html_regenerate_folder } from "./html_regenerate_folder.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_squash } from "./list_squash.mjs";
export async function html_regenerate_all() {
  let dev = app_shared_name_dev_text();
  let folder_dev = folder_public_join(dev);
  let folders = [folder_public(), folder_dev];
  let mapped = await list_map_unordered_async(folders, html_regenerate_folder);
  let regenerated = list_squash(mapped);
  return regenerated;
}
