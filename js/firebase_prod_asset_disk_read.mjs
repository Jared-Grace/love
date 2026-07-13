import { folder_public_join } from "./folder_public_join.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { file_read } from "./file_read.mjs";
export async function firebase_prod_asset_disk_read(file_name) {
  let relative = folder_public_join(file_name);
  let combined = await user_repo_path_combine(relative);
  let text = await file_read(combined);
  return text;
}
