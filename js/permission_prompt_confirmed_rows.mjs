import { permission_prompt_events_blocked } from "./permission_prompt_events_blocked.mjs";
import { permission_prompt_events_confirmed } from "./permission_prompt_events_confirmed.mjs";
import { property_get } from "./property_get.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { permission_prompt_rows_verdicts } from "./permission_prompt_rows_verdicts.mjs";
export async function permission_prompt_confirmed_rows(
  key,
  days,
  seconds_minimum,
  keep,
) {
  "The proved interruptions of the last days, grouped by one field of the call and ranked commonest first, with a verdict written onto the leading rows.";
  "Proved means a recorded approval block falls inside the wait, so nothing here is inferred from how long something took, and every tool is covered alike - the shell, the file tools, a fetch, a browser.";
  "Only the leading rows are given a verdict, because each shell one starts a fresh process. The rest are ranked and handed back unanswered rather than dropped, so a short answer cannot read as a whole one.";
  "Waits whose key is blank are dropped rather than heaped under one empty row: a file tool has no command and a shell call has no path, and those are absences, not a group.";
  let events = await permission_prompt_events_blocked(days, seconds_minimum);
  let confirmed = permission_prompt_events_confirmed(events);
  function known_is(event) {
    let value = property_get(event, key);
    let b = text_empty_not_is(value);
    return b;
  }
  let named = list_filter(confirmed, known_is);
  let rows = permission_prompt_events_grouped_by(named, key);
  let v = Number(keep);
  let shown = list_slice_count(rows, 0, v);
  await permission_prompt_rows_verdicts(shown);
  let r = {
    rows,
    counted: named.length,
    proved: confirmed.length,
    scanned: events.length,
  };
  return r;
}
