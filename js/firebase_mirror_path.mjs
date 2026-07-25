import { folder_user_storage_path } from "./folder_user_storage_path.mjs";
export function firebase_mirror_path(relative) {
  "the local mirror path for a Firebase-storage relative path: storage/<relative>, so the local tree matches Firebase exactly and upload/download are straight copies";
  let path = folder_user_storage_path(relative);
  return path;
}
