import { folder_user_path_join } from "./folder_user_path_join.mjs";
export function folder_user_downloads_path(file_name) {
  let r = folder_user_path_join("Downloads/", file_name);
  return r;
}
