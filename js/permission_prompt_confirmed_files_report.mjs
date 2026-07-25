import { permission_prompt_events_blocked } from "./permission_prompt_events_blocked.mjs";
import { permission_prompt_events_confirmed } from "./permission_prompt_events_confirmed.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
import { permission_prompt_rows_print } from "./permission_prompt_rows_print.mjs";
import { notification_events } from "./notification_events.mjs";
import { not } from "./not.mjs";
export async function permission_prompt_confirmed_files_report(
  days,
  seconds_minimum,
) {
  "The exact files whose approval was PROVED to cost the human, ranked by how often. The other confirmed report groups by the label a rule would carry, which is a folder wherever the tool names one, and a folder row cannot say which sibling is the one still ungranted.";
  "Nothing here is inferred, so the instant-tool test the latency reports need is absent on purpose: a recorded block inside the wait is the whole argument, and it holds for a slow tool exactly as well as for a fast one.";
  let events = await permission_prompt_events_blocked(days, seconds_minimum);
  let confirmed = permission_prompt_events_confirmed(events);
  function path_known_is(event) {
    let empty = text_empty_is(event.path);
    let b = not(empty);
    return b;
  }
  let named = list_filter(confirmed, path_known_is);
  let rows = permission_prompt_events_grouped_by(named, "path");
  permission_prompt_rows_print("proved interruptions, by exact file", rows, 20);
  let recorded = notification_events();
  let summary = {
    days: Number(days),
    seconds_minimum: Number(seconds_minimum),
    blocks_recorded: recorded.length,
    proved: confirmed.length,
    files: rows.length,
  };
  return summary;
}
