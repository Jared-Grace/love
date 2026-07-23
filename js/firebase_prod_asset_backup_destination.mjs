import { file_backup_path } from "./file_backup_path.mjs";
import { firebase_prod_app_backup } from "./firebase_prod_app_backup.mjs";
import { firebase_deploy_function_destination } from "./firebase_deploy_function_destination.mjs";
export function firebase_prod_asset_backup_destination(file_name) {
  let dated = file_backup_path(file_name);
  let f_name = firebase_prod_app_backup.name;
  let destination = firebase_deploy_function_destination(f_name, dated);
  return destination;
}
