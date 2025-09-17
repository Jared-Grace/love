import { path_join } from "./path_join.mjs";
export function firebase_storage_download_path(destination) {
  let result = path_join(["D:\\user", "storage"]);
  let joined = path_join([result, destination]);
  return joined;
}
