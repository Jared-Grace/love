import { path_join } from "./path_join.mjs";
export function folder_user(folder) {
  let f = path_join(["D:\\user", folder]);
  f = path_join(["/media/j/JPM/user", folder]);
  return f;
}
