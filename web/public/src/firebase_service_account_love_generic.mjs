import { folder_secret } from "../../../love/public/src/folder_secret.mjs";
import { folder_find_starts_with } from "../../../love/public/src/folder_find_starts_with.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export async function firebase_service_account_love_generic(name) {
  let prefix = name + "-firebase-adminsdk-";
  let path_folder = folder_secret();
  let only = await folder_find_starts_with(path_folder, prefix);
  let path_folder2 = folder_secret();
  let file_path = path_join([path_folder2, only]);
  return file_path;
}
