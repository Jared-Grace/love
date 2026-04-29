import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_secret } from "../../../love/public/src/folder_secret.mjs";
export function folder_secret_join(only) {
  let path_folder2 = folder_secret();
  let file_path = path_join([path_folder2, only]);
  return file_path;
}
