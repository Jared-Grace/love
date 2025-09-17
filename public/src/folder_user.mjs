import { path_join } from "./path_join.mjs";
export function folder_user(folder) {
  let f = path_join(["D:\\user", folder]);
  return f;
}
