import { folder_secret_join_json } from "./folder_secret_join_json.mjs";
import { app_calendar } from "./app_calendar.mjs";
export function app_calendar_secret_path() {
  let file_path = folder_secret_join_json(app_calendar.name);
  return file_path;
}
