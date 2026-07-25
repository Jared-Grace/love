import { list_filter } from "./list_filter.mjs";
import { text_includes } from "./text_includes.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { memory_folder_realpath } from "./memory_folder_realpath.mjs";
import { notification_events } from "./notification_events.mjs";
import { permission_prompt_events_blocked } from "./permission_prompt_events_blocked.mjs";
import { permission_prompt_events_confirmed } from "./permission_prompt_events_confirmed.mjs";
import { permission_prompt_events_grouped } from "./permission_prompt_events_grouped.mjs";
import { permission_prompt_rows_print } from "./permission_prompt_rows_print.mjs";
export async function permission_prompt_memory_report(days) {
  "Whether writing memory has cost the human a single interruption in the last days - the one failure here that has twice reported itself fixed while still happening.";
  "Deliberately NOT one of the repo gates, and the reason is worth keeping: this observes the PAST, so a single interruption this morning would hold the gate red all day with nothing anyone could do to clear it but wait out the window. A gate has to be clearable by fixing its cause. This is a check to run, or for a daemon to watch, and the caller decides what a red state means.";
  "Three states, never two. NOTHING RECORDED is not the same as clear - the recorder starts empty after a reboot - and collapsing them would turn an absence of evidence into a clean bill of health, which is the precise error that made this fix look done twice.";
  let events = await permission_prompt_events_blocked(days, 1);
  let confirmed = permission_prompt_events_confirmed(events);
  let config = memory_folder();
  let real = memory_folder_realpath();
  function memory_is(event) {
    let b = text_includes(event.label, config) || text_includes(event.label, real);
    return b;
  }
  let interruptions = list_filter(confirmed, memory_is);
  let rows = permission_prompt_events_grouped(interruptions);
  let recorded = notification_events();
  let state = "clear";
  if (recorded.length === 0) {
    state = "nothing recorded";
  }
  if (interruptions.length > 0) {
    state = "regressed";
    permission_prompt_rows_print("memory paths still interrupting", rows, 20);
  }
  let summary = {
    days: Number(days),
    state,
    blocks_recorded: recorded.length,
    interruptions: interruptions.length,
  };
  return summary;
}
