import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { app_calendar_preaching_ask_lookup_path } from "./app_calendar_preaching_ask_lookup_path.mjs";
export async function app_calendar_preaching_ask_lookup_overwrite(lookup) {
  let file_path = app_calendar_preaching_ask_lookup_path();
  await file_overwrite_json(file_path, lookup);
}
