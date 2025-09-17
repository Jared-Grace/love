import { folder_user } from "./folder_user.mjs";
import { path_join } from "./path_join.mjs";
export function firebase_storage_download_path(destination) {
  const folder = "storage";
  let result = folder_user(folder);
  let joined = path_join([result, destination]);
  return joined;
}
