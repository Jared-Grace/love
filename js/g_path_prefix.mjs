import { fn_name } from "./fn_name.mjs";
import { location_pathname_part_first_starts_with } from "./location_pathname_part_first_starts_with.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { localhost_is } from "./localhost_is.mjs";
export function g_path_prefix() {
  let path_prefix = "";
  let l = localhost_is();
  let path_part = app_shared_name_latest_text();
  let sw = location_pathname_part_first_starts_with(path_part);
  if (l || sw) {
    ("a URL, so a forward slash — see ",
      fn_name("g_folder_tiles"),
      ": a backslash here reads as an escape inside a CSS url() and quietly eats the next character, while an img src never noticed because URL parsing rewrites it");
    path_prefix = "../";
  }
  return path_prefix;
}
