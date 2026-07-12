import { function_import_invoke } from "./function_import_invoke.mjs";
import { file_backup } from "./file_backup.mjs";
export async function file_backup_fn(f_name) {
  let file_path = await function_import_invoke(f_name);
  await file_backup(file_path);
  return file_path;
}
