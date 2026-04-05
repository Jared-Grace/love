import { path_join } from "../../../love/public/src/path_join.mjs";
export function folder_user(folder) {
  let f = path_join(["D:\\user", folder]);
  f = path_join(["/media/j/JPM/user", folder]);
  return f;
}
