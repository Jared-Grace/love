import { list_map_remove } from "./list_map_remove.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { app_calendar_preaching_ask_entries } from "./app_calendar_preaching_ask_entries.mjs";
export async function app_calendar_preaching_ask_phones() {
  let filtered = await app_calendar_preaching_ask_entries();
  let phones_unnormalized = list_filter_starts_with(filtered, "+");
  let phones = list_map_remove(phones_unnormalized, " ");
  return phones;
}
