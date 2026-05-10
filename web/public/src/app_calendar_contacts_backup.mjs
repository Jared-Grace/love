import { app_calendar_contacts_path } from "../../../love/public/src/app_calendar_contacts_path.mjs";
import { file_backup_fn_delete } from "../../../love/public/src/file_backup_fn_delete.mjs";
export async function app_calendar_contacts_backup() {
  let r = await file_backup_fn_delete(app_calendar_contacts_path.name);
  return r;
}
