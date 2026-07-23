import { ebible_offline_folders_get } from "./ebible_offline_folders_get.mjs";
import { list_includes } from "./list_includes.mjs";
export function ebible_offline_folder_downloaded_is(bible_folder) {
  let folders = ebible_offline_folders_get();
  let downloaded = list_includes(folders, bible_folder);
  return downloaded;
}
