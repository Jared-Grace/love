import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user } from "../../../love/public/src/folder_user.mjs";
export function folder_user_combine(folder, file_path) {
  let result = folder_user(folder);
  let joined = path_join([result, file_path]);
  return joined;
}
