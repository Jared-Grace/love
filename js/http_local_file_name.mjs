import { http_local } from "./http_local.mjs";
import { firebase_mirror_path } from "./firebase_mirror_path.mjs";
import { http_firebase_file_path } from "./http_firebase_file_path.mjs";
export function http_local_file_name(url) {
  ("local mirror path for a cached URL: the SAME relative path Firebase uses (http/<name>), under the mirror root — so ",
    http_local.name,
    "'s cache is part of the one Firebase mirror, not a separate flat dump under function/",
    http_local.name,
    "/");
  let relative = http_firebase_file_path(url);
  let path = firebase_mirror_path(relative);
  return path;
}
