import { file_backup_path } from "../../../love/public/src/file_backup_path.mjs";
import { file_copy } from "../../../love/public/src/file_copy.mjs";
export async function file_backup(file_path) {
  let combined = file_backup_path(file_path);
  await file_copy(file_path, combined);
}
