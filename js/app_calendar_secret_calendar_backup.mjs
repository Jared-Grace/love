import { app_calendar_secret_path } from "./app_calendar_secret_path.mjs";
import { file_backup_fn_delete } from "./file_backup_fn_delete.mjs";
export async function app_calendar_secret_calendar_backup() {
  let r = await file_backup_fn_delete(app_calendar_secret_path.name);
  return r;
}
