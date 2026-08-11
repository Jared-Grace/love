import { folder_user_root } from "./folder_user_root.mjs";
import { path_join } from "./path_join.mjs";
export function folder_user(folder) {
  "Where a folder of the human's own files lives - the single source every other path builds on. There was a second line above this one naming a Windows drive, computed and then thrown away on the next line; that machine has Linux on it now, so the path it named leads nowhere and is gone.";
  let root = folder_user_root();
  let f = path_join([root, folder]);
  return f;
}
