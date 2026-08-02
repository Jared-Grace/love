import { permission_prompt_events_recent } from "./permission_prompt_events_recent.mjs";
import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
import { commands_time_ranked } from "./commands_time_ranked.mjs";
export async function commands_time_report(days, seconds_minimum) {
  "Every kind of tool call Claude has made over the last days, dearest first by the time it has cost altogether.";
  "Wider than its dispatcher twin on purpose - a shell pipeline and a file read cost real minutes too, and a ranking that only sees repo functions would hide whichever of those is the true top line.";
  let events = await permission_prompt_events_recent(days, seconds_minimum);
  let rows = permission_prompt_events_grouped_by(events, "label");
  let ranked = commands_time_ranked(rows);
  return ranked;
}
