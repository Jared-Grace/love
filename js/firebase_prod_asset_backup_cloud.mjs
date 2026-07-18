import { firebase_prod_asset_download } from "./firebase_prod_asset_download.mjs";
import { firebase_prod_asset_backup_destination } from "./firebase_prod_asset_backup_destination.mjs";
import { firebase_upload_buffer } from "./firebase_upload_buffer.mjs";
export async function firebase_prod_asset_backup_cloud(file_name) {
  let prod = await firebase_prod_asset_download(file_name);
  let destination = firebase_prod_asset_backup_destination(file_name);
  await firebase_upload_buffer(prod, destination);
}
