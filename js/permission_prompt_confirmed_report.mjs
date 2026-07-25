import { permission_prompt_events_recent } from "./permission_prompt_events_recent.mjs";
import { permission_prompt_events_confirmed } from "./permission_prompt_events_confirmed.mjs";
import { permission_prompt_events_grouped } from "./permission_prompt_events_grouped.mjs";
import { permission_prompt_rows_print } from "./permission_prompt_rows_print.mjs";
import { notification_events } from "./notification_events.mjs";
export async function permission_prompt_confirmed_report(
  days,
  seconds_minimum,
) {
  "The interruptions that are PROVED, not ranked by suspicion: every wait that a recorded approval block falls inside. This is what the latency report wanted to be - no floor to defend, no tool held to be instant, no verdict consulted - and it covers every tool, the shell and the browser included.";
  "The floor stays a parameter only to keep the scan cheap; the proof does not depend on it. Nothing recorded yet means an empty table, which is the state of not knowing rather than the finding of none, so the count of recorded blocks is printed alongside to tell those two apart.";
  let events = await permission_prompt_events_recent(days, seconds_minimum);
  let confirmed = permission_prompt_events_confirmed(events);
  let rows = permission_prompt_events_grouped(confirmed);
  permission_prompt_rows_print("proved interruptions", rows, 20);
  let recorded = notification_events();
  let summary = {
    days: Number(days),
    seconds_minimum: Number(seconds_minimum),
    blocks_recorded: recorded.length,
    waits_scanned: events.length,
    proved: confirmed.length,
  };
  return summary;
}
