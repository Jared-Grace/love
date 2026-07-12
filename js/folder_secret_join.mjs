import { path_join } from "./path_join.mjs";
import { folder_secret } from "./folder_secret.mjs";
export function folder_secret_join(only) {
  let path_folder = folder_secret();
  let file_path = path_join([path_folder, only]);
  return file_path;
}
