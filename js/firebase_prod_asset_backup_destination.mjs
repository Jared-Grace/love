import { firebase_prod_app_backup } from "./firebase_prod_app_backup.mjs";
import { path_ending_add } from "./path_ending_add.mjs";
import { file_backup_path_ending } from "./file_backup_path_ending.mjs";
import { firebase_deploy_function_destination } from "./firebase_deploy_function_destination.mjs";
export function firebase_prod_asset_backup_destination(file_name) {
  let ending = file_backup_path_ending();
  let dated = path_ending_add(file_name, ending);
  let f_name = firebase_prod_app_backup.name;
  let destination = firebase_deploy_function_destination(f_name, dated);
  return destination;
}
