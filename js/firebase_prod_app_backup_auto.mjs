import { firebase_prod_app_asset_file_names } from "./firebase_prod_app_asset_file_names.mjs";
import { firebase_prod_asset_backup_auto } from "./firebase_prod_asset_backup_auto.mjs";
import { each_async } from "./each_async.mjs";
export async function firebase_prod_app_backup_auto(app_name) {
  let assets = firebase_prod_app_asset_file_names(app_name);
  await each_async(assets, firebase_prod_asset_backup_auto);
}
