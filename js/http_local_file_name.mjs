import { firebase_mirror_path } from "./firebase_mirror_path.mjs";
import { http_firebase_file_path } from "./http_firebase_file_path.mjs";
export function http_local_file_name(url) {
  "local mirror path for a cached URL: the same relative path Firebase uses (http/<name>), under the mirror root, so the cache is part of the one Firebase mirror rather than a separate flat dump";
  let relative = http_firebase_file_path(url);
  let path = firebase_mirror_path(relative);
  return path;
}
