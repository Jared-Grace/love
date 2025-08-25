import { file_read_json } from "./file_read_json.mjs";
import { folder_find_starts_with } from "./folder_find_starts_with.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { marker } from "./marker.mjs";
export async function firebase_deploy_function() {
  marker("1");
  let prefix = "jared-grace-firebase-adminsdk-";
  let path_folder = folder_previous();
  let only = folder_find_starts_with(path_folder, prefix);
  let data = await file_read_json(only);
  return only;
}
