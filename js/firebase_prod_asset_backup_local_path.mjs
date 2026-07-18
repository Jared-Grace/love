import { firebase_prod_app_backup } from "./firebase_prod_app_backup.mjs";
import { folder_user_storage_function_path } from "./folder_user_storage_function_path.mjs";
import { path_ending_add } from "./path_ending_add.mjs";
import { file_backup_path_ending } from "./file_backup_path_ending.mjs";
import { path_join } from "./path_join.mjs";
export function firebase_prod_asset_backup_local_path(file_name) {
  let folder = folder_user_storage_function_path(firebase_prod_app_backup);
  let ending = file_backup_path_ending();
  let dated = path_ending_add(file_name, ending);
  let path = path_join([folder, dated]);
  return path;
}
