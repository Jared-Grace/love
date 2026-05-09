import { function_import } from "../../../love/public/src/function_import.mjs";
import { file_backup } from "../../../love/public/src/file_backup.mjs";
export async function file_backup_fn(f_name) {
  let imported_fn = await function_import(f_name2);
  let r = await file_backup(file_path);
  return r;
}
