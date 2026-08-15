import { folder_user_root } from "./folder_user_root.mjs";
import { path_join } from "./path_join.mjs";
export function strongs_greek_json_path() {
  "Where the Strong's Greek dictionary sits on the external drive, which is outside this repo, so a command that reads it will not find it on a machine without that drive.";
  let folder = folder_user_root();
  let r = path_join([folder, "downloads", "strongs_greek.json"]);
  return r;
}
