import { folder_user_root } from "./folder_user_root.mjs";
import { path_join } from "./path_join.mjs";
export function strongs_hebrew_js_path() {
  "Where the Strong's Hebrew dictionary sits, beside the Greek one and outside this repo, so a command that reads it will not find it on a machine without that folder. It is the openscriptures file as downloaded, a script that assigns one object, rather than plain JSON.";
  let folder = folder_user_root();
  let r = path_join([folder, "downloads", "strongs_hebrew_dictionary.js"]);
  return r;
}
