import { file_read_json_exists_ensure } from "../../../love/public/src/file_read_json_exists_ensure.mjs";
import { folder_secret_join } from "../../../love/public/src/folder_secret_join.mjs";
import { app_calendar } from "../../../love/public/src/app_calendar.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
export async function app_calendar_download() {
  let file_name = file_name_json(app_calendar.name);
  let file_path = folder_secret_join(file_name);
  let data = await file_read_json_exists_ensure(file_path);
  return data;
}
