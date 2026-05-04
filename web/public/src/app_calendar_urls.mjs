import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { folder_user_docs_read_lines } from "../../../love/public/src/folder_user_docs_read_lines.mjs";
export async function app_calendar_urls() {
  let split = await folder_user_docs_read_lines("preaching_ask.txt");
  let filtered = list_filter_empty_not_is(list);
  return split;
}
