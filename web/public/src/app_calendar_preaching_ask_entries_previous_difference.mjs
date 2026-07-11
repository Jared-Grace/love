import { list_join_newline_ } from "../../../love/public/src/list_join_newline_2.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { app_calendar_preaching_ask_entries_previous } from "../../../love/public/src/app_calendar_preaching_ask_entries_previous.mjs";
import { app_calendar_preaching_ask_entries } from "../../../love/public/src/app_calendar_preaching_ask_entries.mjs";
export async function app_calendar_preaching_ask_entries_previous_difference() {
  let filtered = await app_calendar_preaching_ask_entries();
  let filtered2 = await app_calendar_preaching_ask_entries_previous();
  let difference = list_difference(filtered2, filtered);
  let joined = list_join_newline_(difference);
  return joined;
}
