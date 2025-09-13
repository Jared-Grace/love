import { file_read_json } from "./file_read_json.mjs";
import { folder_find_starts_with } from "./folder_find_starts_with.mjs";
import { path_join } from "./path_join.mjs";
import { folder_previous } from "./folder_previous.mjs";
export async function firebase_service_account() {
  let prefix = "jared-grace-firebase-adminsdk-";
  let v = folder_previous();
  let path_folder = path_join([v, "secret"]);
  let only = await folder_find_starts_with(path_folder, prefix);
  let file_path = path_join([path_folder, only]);
  let service_account = await file_read_json(file_path);
  return service_account;
}
