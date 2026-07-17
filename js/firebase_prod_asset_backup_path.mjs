import { folder_backups_join } from "./folder_backups_join.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { path_ending_add } from "./path_ending_add.mjs";
import { file_backup_path_ending } from "./file_backup_path_ending.mjs";
export async function firebase_prod_asset_backup_path(file_name) {
  let relative = folder_backups_join(file_name);
  let combined = await user_repo_path_combine(relative);
  let ending = file_backup_path_ending();
  let backup_path = path_ending_add(combined, ending);
  return backup_path;
}
