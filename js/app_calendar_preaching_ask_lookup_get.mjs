import { file_read_json_exists_ensure } from "./file_read_json_exists_ensure.mjs";
import { app_calendar_preaching_ask_lookup_path } from "./app_calendar_preaching_ask_lookup_path.mjs";
export async function app_calendar_preaching_ask_lookup_get() {
  let file_path = app_calendar_preaching_ask_lookup_path();
  let lookup = await file_read_json_exists_ensure(file_path);
  return lookup;
}
