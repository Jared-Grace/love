import { file_backup_path } from "./file_backup_path.mjs";
import { folder_backups_join } from "./folder_backups_join.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function firebase_prod_asset_backup_path(file_name) {
  let relative = folder_backups_join(file_name);
  let combined = await user_repo_path_combine(relative);
  let backup_path = file_backup_path(combined);
  return backup_path;
}
