import { firebase_prod_asset_download } from "./firebase_prod_asset_download.mjs";
import { firebase_prod_asset_backup_path } from "./firebase_prod_asset_backup_path.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_write } from "./file_write.mjs";
export async function firebase_prod_asset_backup(file_name) {
  let prod = await firebase_prod_asset_download(file_name);
  let backup_path = await firebase_prod_asset_backup_path(file_name);
  await file_parent_exists_ensure(backup_path);
  await file_write(backup_path, prod);
}
