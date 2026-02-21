import { path_join } from "../../../love/public/src/path_join.mjs";
export function folder_user(folder) {
  let f = path_join(["D:\\user", folder]);
  return f;
}
