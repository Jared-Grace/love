import { firebase_prod_app_asset_file_names } from "./firebase_prod_app_asset_file_names.mjs";
import { firebase_prod_asset_backup } from "./firebase_prod_asset_backup.mjs";
import { each_async } from "./each_async.mjs";
export async function firebase_prod_app_backup(app_name) {
  let assets = firebase_prod_app_asset_file_names(app_name);
  await each_async(assets, firebase_prod_asset_backup);
}
