import { app_calendar_preaching_ask_entries_generic } from "./app_calendar_preaching_ask_entries_generic.mjs";
import { folder_user_docs_path_previous } from "./folder_user_docs_path_previous.mjs";
export async function app_calendar_preaching_ask_entries_previous() {
  let file_name_to_path = folder_user_docs_path_previous;
  let filtered =
    await app_calendar_preaching_ask_entries_generic(file_name_to_path);
  return filtered;
}
