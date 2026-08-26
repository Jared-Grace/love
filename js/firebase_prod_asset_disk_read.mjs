import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
export async function firebase_prod_asset_disk_read(file_name) {
  let folder = folder_public_absolute();
  let combined = path_join([folder, file_name]);
  let text = await file_read(combined);
  return text;
}
