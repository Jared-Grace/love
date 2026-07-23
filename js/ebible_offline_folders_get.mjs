import { null_is } from "./null_is.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
export function ebible_offline_folders_get() {
  ("the finished downloads are named in local storage, so reading a verse can tell without waiting whether an offline copy is worth looking for");
  let folders = storage_local_get(ebible_offline_folders_get, "folders");
  if (null_is(folders)) {
    return [];
  }
  return folders;
}
