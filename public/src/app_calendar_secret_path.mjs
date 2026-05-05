import { folder_secret_join_json } from "../../../love/public/src/folder_secret_join_json.mjs";
import { app_calendar } from "../../../love/public/src/app_calendar.mjs";
export function app_calendar_secret_path() {$a
  const name = app_calendar.name;
  let file_path = folder_secret_join_json(name);
  return file_path;
}
