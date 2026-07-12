import { folder_previous_join } from "./folder_previous_join.mjs";
import { path_join } from "./path_join.mjs";
export function folder_previous_join_multiple(repo, f_path) {
  let result = path_join([repo, f_path]);
  let joined = folder_previous_join(result);
  return joined;
}
