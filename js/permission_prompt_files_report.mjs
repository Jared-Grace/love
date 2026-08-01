import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { permission_prompt_events_recent } from "./permission_prompt_events_recent.mjs";
import { permission_prompt_tool_instant_is } from "./permission_prompt_tool_instant_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
import { permission_prompt_rows_print } from "./permission_prompt_rows_print.mjs";
export async function permission_prompt_files_report(days, seconds_minimum) {
  "Which exact files the human had to approve a write to, over the last days, ranked by how often. The folder report says where the cost is; this says which file a grant has to name, and those differ wherever a folder holds some files that are granted and some that are not - there the folder number is the sum of a solved problem and an unsolved one.";
  "Only the tools that cannot be slow by themselves are counted, so every row here is a wait with no available explanation but the human.";
  "The proved report answers this same question from the recorded blocks, and answers it without the instant-tool test, so prefer it wherever the record reaches; what is left to this one is the days before the recorder existed.";
  let events = await permission_prompt_events_recent(days, seconds_minimum);
  function instant_is(event) {
    let b = permission_prompt_tool_instant_is(event.tool);
    return b;
  }
  let measured = list_filter(events, instant_is);
  function path_known_is(event) {
    let b = text_empty_not_is(event.path);
    return b;
  }
  let named = list_filter(measured, path_known_is);
  let rows = permission_prompt_events_grouped_by(named, "path");
  permission_prompt_rows_print("waited on the human, by exact file", rows, 20);
  let summary = {
    days: Number(days),
    seconds_minimum: Number(seconds_minimum),
    waits: named.length,
    files: rows.length,
  };
  return summary;
}
