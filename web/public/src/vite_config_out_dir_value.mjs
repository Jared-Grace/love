import { app_shared_name_latest_text } from "../../../love/public/src/app_shared_name_latest_text.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_public } from "../../../love/public/src/folder_public.mjs";
export function vite_config_out_dir_value() {
  let p = folder_public();
  const folder = app_shared_name_latest_text();
  let path = path_join([p, folder]);
  return path;
}
