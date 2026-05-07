import { list_map_suffix_without_try_multiple } from "../../../love/public/src/list_map_suffix_without_try_multiple.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_prefix_without_try_multiple } from "../../../love/public/src/list_map_prefix_without_try_multiple.mjs";
import { list_filter_starts_with_https_prefix } from "../../../love/public/src/list_filter_starts_with_https_prefix.mjs";
import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { folder_user_docs_read_lines } from "../../../love/public/src/folder_user_docs_read_lines.mjs";
export async function app_calendar_url_ids() {
  let lines = await folder_user_docs_read_lines("preaching_ask.txt");
  let filtered = list_filter_empty_not_is(lines);
  let urls = list_filter_starts_with_https_prefix(filtered);
  const p1 = "https://www.facebook.com/profile.php?id=";
  const p2 = "https://www.facebook.com/";
  let prefixes = [p1, p2];
  urls = list_map_prefix_without_try_multiple(urls, prefixes);
  const suffixes = ["#", "?"];
  urls = list_map_suffix_without_try_multiple(urls, suffixes);
  let url_ids = list_unique(urls);
  return url_ids;
}
