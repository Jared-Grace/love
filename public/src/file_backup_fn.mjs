import { function_import_invoke } from "../../../love/public/src/function_import_invoke.mjs";
import { file_backup } from "../../../love/public/src/file_backup.mjs";
export async function file_backup_fn(f_name) {
  let file_path = await function_import_invoke(f_name);
  await file_backup(file_path);
}
