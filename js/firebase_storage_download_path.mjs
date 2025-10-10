import { folder_user_combine } from "../../../love/public/src/folder_user_combine.mjs";
export function firebase_storage_download_path(destination) {
  const folder = "storage";
  let joined = folder_user_combine(folder, destination);
  return joined;
}
