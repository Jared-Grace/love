import { fn_name } from "./fn_name.mjs";
import { folder_secret_join_json } from "./folder_secret_join_json.mjs";
export function app_calendar_secret_path() {
  let file_path = folder_secret_join_json(fn_name("app_calendar"));
  return file_path;
}
