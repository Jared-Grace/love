import { file_backup } from "../../../love/public/src/file_backup.mjs";
export async function file_backup_fn(f_name) {
  let r = await file_backup(file_path);
  return r;
}
