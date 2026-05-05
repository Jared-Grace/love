import { file_backup_path } from "../../../love/public/src/file_backup_path.mjs";
import { path_ending_add } from "../../../love/public/src/path_ending_add.mjs";
import { file_copy } from "../../../love/public/src/file_copy.mjs";
export async function file_backup(file_path) {
  let ending = file_backup_path();
  let combined = path_ending_add(file_path, ending);
  await file_copy(file_path, combined);
}
