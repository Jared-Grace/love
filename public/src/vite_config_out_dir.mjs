import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_public } from "../../../love/public/src/folder_public.mjs";
export function vite_config_out_dir() {
  let p = folder_public();
  let path = path_join([p]);
  return path;
}
