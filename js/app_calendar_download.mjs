import { app_calendar_secret_path } from "./app_calendar_secret_path.mjs";
import { file_read_json_exists_ensure } from "./file_read_json_exists_ensure.mjs";
export async function app_calendar_download() {
  let file_path = app_calendar_secret_path();
  let data = await file_read_json_exists_ensure(file_path);
  return data;
}
