import { path_join } from "../../../love/public/src/path_join.mjs";
export function vite_config_path() {
  const f_name = "vite.config.mjs";
  let s = "scripts";
  let path = path_join([s, f_name]);
  return path;
}
