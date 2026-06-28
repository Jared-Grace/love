import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { folder_user_docs_read_lines } from "../../../love/public/src/folder_user_docs_read_lines.mjs";
export async function app_calendar_preaching_ask_entries() {
  let lines = await folder_user_docs_read_lines(
    app_calendar_preaching_ask_file_name(),
  );
  let filtered = list_filter_empty_not_is(lines);
  return filtered;
}
