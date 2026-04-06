import { location_pathname_part_first_starts_with } from "../../../love/public/src/location_pathname_part_first_starts_with.mjs";
import { app_shared_name_latest_text } from "../../../love/public/src/app_shared_name_latest_text.mjs";
import { localhost_is } from "../../../love/public/src/localhost_is.mjs";
export function app_g_path_prefix() {
  let path_prefix = "";
  let l = localhost_is();
  const path_part = app_shared_name_latest_text();
  let sw = location_pathname_part_first_starts_with(path_part);
  if (l || sw) {
    path_prefix = "..\\";
  }
  return path_prefix;
}
