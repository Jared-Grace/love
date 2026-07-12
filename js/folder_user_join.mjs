import { path_join } from "./path_join.mjs";
import { folder_user } from "./folder_user.mjs";
export function folder_user_join(folder, file_path) {
  let result = folder_user(folder);
  let joined = path_join([result, file_path]);
  return joined;
}
