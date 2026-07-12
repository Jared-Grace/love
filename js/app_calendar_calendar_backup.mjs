import { me_calendar_zip_path } from "./me_calendar_zip_path.mjs";
import { each_async } from "./each_async.mjs";
import { me_calendar_path } from "./me_calendar_path.mjs";
import { file_backup_fn_delete } from "./file_backup_fn_delete.mjs";
export async function app_calendar_calendar_backup() {
  async function lambda(fn) {
    await file_backup_fn_delete(fn.name);
  }
  await each_async([me_calendar_path, me_calendar_zip_path], lambda);
}
