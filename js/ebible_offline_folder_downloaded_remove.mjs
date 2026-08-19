import { ebible_offline_folders_get } from "./ebible_offline_folders_get.mjs";
import { ebible_offline_folders_set } from "./ebible_offline_folders_set.mjs";
import { list_remove_if_exists } from "./list_remove_if_exists.mjs";
export function ebible_offline_folder_downloaded_remove(bible_folder) {
  "one bible stops being named as ready to read with no internet, and the rest of the list stays exactly as it was";
  "the twin of naming one as downloaded, and it forgives a folder that is not in the list, because deleting what was never saved is a thing a reader can ask for and it should simply be true afterwards";
  let folders = ebible_offline_folders_get();
  list_remove_if_exists(folders, bible_folder);
  ebible_offline_folders_set(folders);
}
