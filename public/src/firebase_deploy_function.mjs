import { list_first } from "./list_first.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { folder_read } from "./folder_read.mjs";
import { marker } from "./marker.mjs";
export function firebase_deploy_function() {
  marker("1");
  let prefix = "jared-grace-firebase-adminsdk-";
  let path_folder = folder_previous();
  let files = folder_read(path_folder);
  let first = list_first(list);
  return files;
}
