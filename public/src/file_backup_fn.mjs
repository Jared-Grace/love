import { file_backup } from "../../../love/public/src/file_backup.mjs";
export async function file_backup_fn(file_path) {
  let r = await file_backup(file_path);
  return r;
}
