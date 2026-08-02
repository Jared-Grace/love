import { g_content_backup_folder } from "./g_content_backup_folder.mjs";
import { path_join } from "./path_join.mjs";
export function g_content_backup_path(storage_path) {
  "Where one stored file is kept in the backup repo - under the same address it has in storage.";
  "Keeping the address is what makes the backup readable as the thing it copies: a file found in the repo says where it came from without anybody consulting a mapping.";
  let folder = g_content_backup_folder();
  let path = path_join([folder, storage_path]);
  return path;
}
