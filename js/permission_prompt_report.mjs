import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { permission_prompt_events_recent } from "./permission_prompt_events_recent.mjs";
import { permission_prompt_events_grouped } from "./permission_prompt_events_grouped.mjs";
import { permission_prompt_tool_instant_is } from "./permission_prompt_tool_instant_is.mjs";
import { permission_prompt_rows_verdicts } from "./permission_prompt_rows_verdicts.mjs";
import { permission_prompt_rows_print } from "./permission_prompt_rows_print.mjs";
export async function permission_prompt_report(days, seconds_minimum) {
  "Which tool calls made the human stop and approve something, over the last days, ranked by how often - the DEMAND side of the permission system. The allow-rule gates answer which rules are dead; this answers which interruptions are real, so a rule gets written for what actually costs the human time instead of for whatever seemed likely.";
  "Two sections, because the evidence differs in kind and merging them would launder a guess into a measurement. The first holds tools that do nothing but touch a local file, where a long wait has no other available cause. The second holds tools that can be slow all by themselves, so its rows carry the guard verdict instead: a row the guard settles never reached the human, whatever the clock says.";
  let events = await permission_prompt_events_recent(days, seconds_minimum);
  function instant_is(event) {
    let b = permission_prompt_tool_instant_is(event.tool);
    return b;
  }
  function variable_is(event) {
    let b2 = instant_is(event);
    let b = not(b2);
    return b;
  }
  let measured = list_filter(events, instant_is);
  let variable = list_filter(events, variable_is);
  let measured_rows = permission_prompt_events_grouped(measured);
  let variable_rows = permission_prompt_events_grouped(variable);
  let shown = variable_rows.slice(0, 12);
  await permission_prompt_rows_verdicts(shown);
  permission_prompt_rows_print(
    "waited on the human (file tools - a wait has no other cause)",
    measured_rows,
    15,
  );
  permission_prompt_rows_print(
    "waited on something (tools that can be slow by themselves)",
    shown,
    12,
  );
  let summary = {
    days: Number(days),
    seconds_minimum: Number(seconds_minimum),
    waits: events.length,
    measured: measured.length,
    variable: variable.length,
  };
  return summary;
}
