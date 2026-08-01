import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
import { permission_prompt_rows_verdicts } from "./permission_prompt_rows_verdicts.mjs";
import { permission_prompt_events_blocked } from "./permission_prompt_events_blocked.mjs";
import { permission_prompt_events_confirmed } from "./permission_prompt_events_confirmed.mjs";
import { permission_prompt_rows_print } from "./permission_prompt_rows_print.mjs";
import { notification_events } from "./notification_events.mjs";
export async function permission_prompt_confirmed_report(
  key,
  days,
  seconds_minimum,
) {
  "The interruptions that are PROVED, not ranked by suspicion: every wait that a recorded approval block falls inside. This is what the latency report wanted to be - no floor to defend, no tool held to be instant, no verdict consulted - and it covers every tool, the shell and the browser included.";
  "The key says what to count them by, because there is no one right grouping - only the one that matches how the rule would be written. Group by label to see the shape a grant would carry; by path when grants are written per file, where a folder row cannot say which sibling is the one still missing; by command when the shape lies, which it does for any chain, since a sequence beginning with an allowed cd is filed under cd and no grant written for cd can fix it.";
  "Waits whose key is blank are dropped rather than heaped under one empty row: a file tool has no command and a shell call has no path, and those are absences, not a group. Grouping by label drops nothing, every wait having one.";
  "The floor stays a parameter only to keep the scan cheap; the proof does not depend on it. Nothing recorded yet means an empty table, which is the state of not knowing rather than the finding of none, so the count of recorded blocks is printed alongside to tell those two apart.";
  let keys = ["label", "path", "command"];
  list_includes_assert_json(keys, key, "count the proved waits by which field");
  let events = await permission_prompt_events_blocked(days, seconds_minimum);
  let confirmed = permission_prompt_events_confirmed(events);
  function known_is(event) {
    let value = property_get(event, key);
    let b = text_empty_not_is(value);
    return b;
  }
  let named = list_filter(confirmed, known_is);
  let rows = permission_prompt_events_grouped_by(named, key);
  let keep = 20;
  let shown = rows.slice(0, keep);
  ("the guard is asked as it stands today, which sorts a cost already paid off from one still being paid: a row reading allow was covered by some later grant and only its history is left");
  await permission_prompt_rows_verdicts(shown);
  permission_prompt_rows_print("proved interruptions, by " + key, rows, keep);
  let recorded = notification_events();
  let summary = {
    key,
    days: Number(days),
    seconds_minimum: Number(seconds_minimum),
    blocks_recorded: recorded.length,
    waits_scanned: events.length,
    proved: confirmed.length,
    counted: named.length,
  };
  return summary;
}
