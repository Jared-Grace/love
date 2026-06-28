import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { folder_user_docs_read } from "../../../love/public/src/folder_user_docs_read.mjs";
import { app_calendar_preaching_ask_file_name } from "../../../love/public/src/app_calendar_preaching_ask_file_name.mjs";
import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
export async function app_calendar_preaching_ask_entries() {
  let file_name = app_calendar_preaching_ask_file_name();
  let contents = await folder_user_docs_read(file_name);
  let lines = text_split_newline(contents);
  let filtered = list_filter_empty_not_is(lines);
  return filtered;
}
