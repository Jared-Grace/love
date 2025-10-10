import { http_firebase_file_name } from "../../../love/public/src/http_firebase_file_name.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { firebase_path_fix } from "../../../love/public/src/firebase_path_fix.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export function http_firebase_file_path(url) {
  marker("1");
  let file_name = http_firebase_file_name(url);
  let joined = path_join(["http", file_name]);
  joined = firebase_path_fix(joined);
  return joined;
}
