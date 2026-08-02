import { permission_prompt_events_recent } from "./permission_prompt_events_recent.mjs";
import { permission_prompt_events_run_named } from "./permission_prompt_events_run_named.mjs";
import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
import { commands_time_ranked } from "./commands_time_ranked.mjs";
export async function commands_time_dispatcher_report(days, seconds_minimum) {
  "Which repo functions Claude has spent the most time waiting on over the last days - one row per function name, dearest first.";
  "Grouped by the function rather than by the whole command line because the function is the thing that can be made faster. Two calls to the same name with different arguments are the same code running twice and belong in one row.";
  let events = await permission_prompt_events_recent(days, seconds_minimum);
  let named = permission_prompt_events_run_named(events);
  let rows = permission_prompt_events_grouped_by(named, "run_name");
  let ranked = commands_time_ranked(rows);
  return ranked;
}
