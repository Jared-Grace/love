import { app_calendar_preaching_ask_entries_generic } from "./app_calendar_preaching_ask_entries_generic.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
export async function app_calendar_preaching_ask_entries() {
  let file_name_to_path = folder_user_docs_path;
  let filtered =
    await app_calendar_preaching_ask_entries_generic(file_name_to_path);
  return filtered;
}
