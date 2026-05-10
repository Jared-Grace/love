import { file_backup_fn_delete } from "../../../love/public/src/file_backup_fn_delete.mjs";
export async function app_calendar_contacts_backup(f_name) {
  return await file_backup_fn_delete(f_name);
}
