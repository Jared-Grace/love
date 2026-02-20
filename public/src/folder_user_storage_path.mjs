import { folder_user_join } from "../../../love/public/src/folder_user_join.mjs";
export function folder_user_storage_path(path) {
  const folder = "storage";
  let joined = folder_user_join(folder, path);
  return joined;
}
