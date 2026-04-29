import { folder_previous_2_join } from "../../../love/public/src/folder_previous_2_join.mjs";
import { folder_find_starts_with } from "../../../love/public/src/folder_find_starts_with.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export async function firebase_service_account_love_generic(name) {
  let prefix = name + "-firebase-adminsdk-";
  let path_folder = folder_previous_2_join("secret");
  let only = await folder_find_starts_with(path_folder, prefix);
  let file_path = path_join([path_folder, only]);
  return file_path;
}
