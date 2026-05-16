import { each_async } from "../../../love/public/src/each_async.mjs";
import { me_calendar_path } from "../../../love/public/src/me_calendar_path.mjs";
import { file_backup_fn_delete } from "../../../love/public/src/file_backup_fn_delete.mjs";
export async function app_calendar_calendar_backup() {
  async function lambda(item) {}
  await each_async(list, lambda);
  await file_backup_fn_delete(me_calendar_path.name);
}
