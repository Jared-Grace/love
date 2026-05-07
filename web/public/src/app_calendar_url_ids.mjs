import { each } from "../../../love/public/src/each.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_prefix_without_try_multiple } from "../../../love/public/src/list_map_prefix_without_try_multiple.mjs";
import { list_map_suffix_without_try } from "../../../love/public/src/list_map_suffix_without_try.mjs";
import { list_filter_starts_with_https_prefix } from "../../../love/public/src/list_filter_starts_with_https_prefix.mjs";
import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { folder_user_docs_read_lines } from "../../../love/public/src/folder_user_docs_read_lines.mjs";
export async function app_calendar_url_ids() {
  let split = await folder_user_docs_read_lines("preaching_ask.txt");
  let filtered = list_filter_empty_not_is(split);
  let filtered2 = list_filter_starts_with_https_prefix(filtered);
  const p1 = "https://www.facebook.com/profile.php?id=";
  const p2 = "https://www.facebook.com/";
  let prefixes = [p1, p2];
  filtered2 = list_map_prefix_without_try_multiple(filtered2, prefixes);
  function lambda(item) {
    filtered2 = list_map_suffix_without_try(filtered2, item);
  }
  each(["#", "?"], lambda);
  let url_ids = list_unique(url_ids_with_duplicates);
  return url_ids;
}
