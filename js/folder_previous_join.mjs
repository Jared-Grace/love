import { path_join } from "./path_join.mjs";
import { folder_previous } from "./folder_previous.mjs";
export function folder_previous_join(path) {
  let p = folder_previous();
  let joined = path_join([p, path]);
  return joined;
}
