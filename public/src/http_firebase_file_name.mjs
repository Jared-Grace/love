import { firebase_path_fix } from "./firebase_path_fix.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { string_base64_to } from "./string_base64_to.mjs";
export function http_firebase_file_name(url) {
  let safe = string_base64_to(url);
  let file_name = file_name_json(safe);
  let joined = path_join(["http", file_name]);
  joined = firebase_path_fix(joined);
  return joined;
}
