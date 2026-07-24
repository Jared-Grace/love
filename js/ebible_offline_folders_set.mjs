import { ebible_offline_folders_get } from "./ebible_offline_folders_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function ebible_offline_folders_set(folders) {
  "the reader of the list names the storage key, so writing and reading always agree on where the list lives";
  storage_local_set(ebible_offline_folders_get, "folders", folders);
}
