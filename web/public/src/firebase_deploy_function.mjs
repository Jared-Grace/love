import { string_starts_with } from "./string_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { folder_read } from "./folder_read.mjs";
import { marker } from "./marker.mjs";
export function firebase_deploy_function() {
  marker("1");
  let prefix = "jared-grace-firebase-adminsdk-";
  let path_folder = folder_previous();
  let files = folder_read(path_folder);
  function lambda(item) {
    let v2 = string_starts_with(item, prefix);
  }
  let v = list_filter(files, lambda);
  return files;
}
