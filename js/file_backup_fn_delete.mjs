import { file_delete } from "./file_delete.mjs";
import { file_backup_fn } from "./file_backup_fn.mjs";
export async function file_backup_fn_delete(f_name) {
  let file_path = await file_backup_fn(f_name);
  await file_delete(file_path);
}
