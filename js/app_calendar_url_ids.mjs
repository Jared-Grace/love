import { list_size } from "./list_size.mjs";
import { app_calendar_preaching_ask_entries } from "./app_calendar_preaching_ask_entries.mjs";
import { list_map_suffix_without_try_multiple } from "./list_map_suffix_without_try_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map_prefix_without_try_multiple } from "./list_map_prefix_without_try_multiple.mjs";
import { list_filter_starts_with_https_prefix } from "./list_filter_starts_with_https_prefix.mjs";
export async function app_calendar_url_ids() {
  let filtered = await app_calendar_preaching_ask_entries();
  let urls = list_filter_starts_with_https_prefix(filtered);
  let p1 = "https://www.facebook.com/profile.php?id=";
  let p2 = "https://www.facebook.com/";
  let prefixes = [p1, p2];
  urls = list_map_prefix_without_try_multiple(urls, prefixes);
  let suffixes = ["#", "?"];
  urls = list_map_suffix_without_try_multiple(urls, suffixes);
  let size = list_size(urls);
  let url_ids = list_unique(urls);
  let message = list_size(url_ids);
  return url_ids;
}
