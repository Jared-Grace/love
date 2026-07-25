import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { permission_prompt_events_recent } from "./permission_prompt_events_recent.mjs";
import { permission_prompt_events_asked } from "./permission_prompt_events_asked.mjs";
import { permission_prompt_events_grouped } from "./permission_prompt_events_grouped.mjs";
import { permission_prompt_tool_instant_is } from "./permission_prompt_tool_instant_is.mjs";
import { permission_prompt_rows_print } from "./permission_prompt_rows_print.mjs";
export async function permission_prompt_report(days) {
  "Which tool calls made the human stop and approve something, over the last days, ranked by how often - the DEMAND side of the permission system. The allow-rule gates answer which rules are dead; this answers which interruptions are real, so a rule gets written for what actually costs the human time instead of for whatever seemed likely.";
  "Two sections, because the evidence differs in kind and merging them would launder a guess into a measurement. The first holds tools that are instant unless something blocks them, where a wait has no other explanation. The second holds tools that can be slow on their own; those are filtered down to commands the guard leaves to the permission engine, which narrows the suspects without convicting any of them.";
  let events = await permission_prompt_events_recent(days);
  function instant_is(event) {
    let b = permission_prompt_tool_instant_is(event.tool);
    return b;
  }
  function variable_is(event) {
    let b = not(instant_is(event));
    return b;
  }
  let measured = list_filter(events, instant_is);
  let variable = list_filter(events, variable_is);
  let suspects = await permission_prompt_events_asked(variable);
  let measured_rows = permission_prompt_events_grouped(measured);
  let suspect_rows = permission_prompt_events_grouped(suspects);
  permission_prompt_rows_print(
    "waited on the human (instant tools - a wait has no other cause)",
    measured_rows,
    15,
  );
  permission_prompt_rows_print(
    "possibly waited (tools that can be slow by themselves)",
    suspect_rows,
    10,
  );
  let summary = {
    days: Number(days),
    waits: events.length,
    measured: measured.length,
    suspects: suspects.length,
  };
  return summary;
}
