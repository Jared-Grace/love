import { firebase_prod_asset_download } from "./firebase_prod_asset_download.mjs";
import { firebase_prod_asset_backup_local_path } from "./firebase_prod_asset_backup_local_path.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_write } from "./file_write.mjs";
export async function firebase_prod_asset_backup_local(file_name) {
  let prod = await firebase_prod_asset_download(file_name);
  let path = firebase_prod_asset_backup_local_path(file_name);
  await file_parent_exists_ensure(path);
  await file_write(path, prod);
}
