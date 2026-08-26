import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
export async function firebase_prod_asset_disk_read(file_name) {
  let combined = folder_public_absolute_join(file_name);
  let text = await file_read(combined);
  return text;
}
