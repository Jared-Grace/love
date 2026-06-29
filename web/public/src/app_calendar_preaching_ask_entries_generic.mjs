import { file_read_lines_empty_not_is } from "../../../love/public/src/file_read_lines_empty_not_is.mjs";
import { app_calendar_preaching_ask_file_name } from "../../../love/public/src/app_calendar_preaching_ask_file_name.mjs";
export async function app_calendar_preaching_ask_entries_generic(
  file_name_to_path,
) {
  let file_name = app_calendar_preaching_ask_file_name();
  let file_path = file_name_to_path(file_name);
  let filtered = await file_read_lines_empty_not_is(file_path);
  return filtered;
}
