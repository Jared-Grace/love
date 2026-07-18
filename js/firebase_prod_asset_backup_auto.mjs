import { firebase_prod_asset_backup_cloud } from "./firebase_prod_asset_backup_cloud.mjs";
import { firebase_prod_asset_backup_local } from "./firebase_prod_asset_backup_local.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
export async function firebase_prod_asset_backup_auto(file_name) {
  await firebase_prod_asset_backup_cloud(file_name);
  let local = function lambda() {
    return firebase_prod_asset_backup_local(file_name);
  };
  await catch_log_async(local);
}
