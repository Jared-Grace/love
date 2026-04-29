import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
export async function app_calendar_download() {
  let data = await file_read_json(file_path);
}
