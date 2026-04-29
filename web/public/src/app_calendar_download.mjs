import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
export async function app_calendar_download() {
  let file_name = file_name_json(app_calendar.name);
  let file_path = folder_secret_join(file_name);
  let data = await file_read_json(file_path);
}
