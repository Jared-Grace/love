import { file_backup_fn_delete } from "../../../love/public/src/file_backup_fn_delete.mjs";
export async function app_calendar_secret_calendar_backup(f_name) {
  let r = await file_backup_fn_delete(f_name);
  return r;
}
