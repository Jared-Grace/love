import { path_join } from "../../../love/public/src/path_join.mjs";
export function folder_scripts_join(f_name) {
  let s = "scripts";
  let path = path_join([s, f_name]);
  return path;
}
