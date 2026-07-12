import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
export function app_calendar_preaching_ask_lookup_path() {
  let file_name = "preaching_ask.lookup.json";
  let file_path = folder_user_docs_path(file_name);
  return file_path;
}
