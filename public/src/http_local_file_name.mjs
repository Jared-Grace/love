import { http_firebase_file_name } from "./http_firebase_file_name.mjs";
import { http_local } from "./http_local.mjs";
import { path_join } from "./path_join.mjs";
export function http_local_file_name(url) {
  let file_name = http_firebase_file_name(url);
  let fn = http_local;
  let joined = path_join(["D:\\user\\storage\\function", fn.name, file_name]);
  return joined;
}
