import { folder_secret_join } from "../../../love/public/src/folder_secret_join.mjs";
import { app_calendar } from "../../../love/public/src/app_calendar.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
export function app_calendar_secret_path() {
  const name = app_calendar.name;
  let file_name = file_name_json(name);
  let file_path = folder_secret_join(file_name);
  return file_path;
}
