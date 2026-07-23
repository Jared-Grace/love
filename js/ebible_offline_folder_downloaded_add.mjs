import { ebible_offline_folder_downloaded_is } from "./ebible_offline_folder_downloaded_is.mjs";
import { ebible_offline_folders_get } from "./ebible_offline_folders_get.mjs";
import { ebible_offline_folders_set } from "./ebible_offline_folders_set.mjs";
import { list_add } from "./list_add.mjs";
export function ebible_offline_folder_downloaded_add(bible_folder) {
  ("named only once the whole download finished, so a download cut short is never mistaken for a complete bible");
  let downloaded = ebible_offline_folder_downloaded_is(bible_folder);
  if (downloaded) {
    return;
  }
  let folders = ebible_offline_folders_get();
  list_add(folders, bible_folder);
  ebible_offline_folders_set(folders);
}
