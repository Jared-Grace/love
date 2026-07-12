import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { app_calendar_secret_path } from "./app_calendar_secret_path.mjs";
export async function app_calendar_upload(object) {
  let file_path = app_calendar_secret_path();
  await file_overwrite_json(file_path, object);
}
