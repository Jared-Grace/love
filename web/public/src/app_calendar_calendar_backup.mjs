import { me_calendar_path } from "../../../love/public/src/me_calendar_path.mjs";
import { file_backup_fn_delete } from "../../../love/public/src/file_backup_fn_delete.mjs";
export async function app_calendar_calendar_backup() {
  await file_backup_fn_delete(me_calendar_path.name);
}
