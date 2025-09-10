import { local_function_path } from "./local_function_path.mjs";
import { http_firebase_file_name } from "./http_firebase_file_name.mjs";
import { http_local } from "./http_local.mjs";
export function http_local_file_name(url) {
  let file_name = http_firebase_file_name(url);
  let fn = http_local;
  let joined = local_function_path(fn, file_name);
  return joined;
}
