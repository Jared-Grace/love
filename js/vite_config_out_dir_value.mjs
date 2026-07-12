import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { path_join } from "./path_join.mjs";
import { folder_public } from "./folder_public.mjs";
export function vite_config_out_dir_value() {
  let p = folder_public();
  let folder = app_shared_name_latest_text();
  let path = path_join([p, folder]);
  return path;
}
