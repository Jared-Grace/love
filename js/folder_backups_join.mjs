import { folder_backups } from "./folder_backups.mjs";
import { path_join } from "./path_join.mjs";
export function folder_backups_join(f_path) {
  let result = folder_backups();
  let combined = path_join([result, f_path]);
  return combined;
}
