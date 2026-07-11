import { folder_scripts_join } from "../../../love/public/src/folder_scripts_join.mjs";
export function vite_config_path() {
  let f_name = "vite.config.mjs";
  let path = folder_scripts_join(f_name);
  return path;
}
