import { path_join } from "../../../love/public/src/path_join.mjs";
export function vite_config_path() {
  let s = "scripts";
  let path = path_join([s, "vite.config.mjs"]);
  return path;
}
