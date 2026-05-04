import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { https_prefix } from "../../../love/public/src/https_prefix.mjs";
import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { folder_user_docs_read_lines } from "../../../love/public/src/folder_user_docs_read_lines.mjs";
export async function app_calendar_urls() {
  let split = await folder_user_docs_read_lines("preaching_ask.txt");
  let filtered = list_filter_empty_not_is(split);
  function lambda(item) {}
  let filtered2 = list_filter(list, lambda);
  let p = https_prefix();
  return filtered;
}
