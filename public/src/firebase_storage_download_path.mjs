import { path_join } from "./path_join.mjs";
export function firebase_storage_download_path(destination) {
  let joined = path_join(["D:\\user\\storage", destination]);
  return joined;
}
