import { fn_name } from "./fn_name.mjs";
import { file_backup_fn_delete } from "./file_backup_fn_delete.mjs";
export async function app_calendar_contacts_downloaded_backup() {
  let r = await file_backup_fn_delete(
    fn_name("app_calendar_contacts_downloaded_path"),
  );
  return r;
}
