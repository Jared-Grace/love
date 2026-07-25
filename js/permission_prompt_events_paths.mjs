import { list_filter } from "./list_filter.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { permission_prompt_events_file } from "./permission_prompt_events_file.mjs";
export async function permission_prompt_events_paths(
  paths,
  days,
  seconds_minimum,
) {
  "Scans the given transcripts for calls that took at least seconds_minimum to come back, then cuts the results to the last days.";
  "The window has to be applied to the EVENTS and not only to the files: a session touched an hour ago still carries every call it ever made, so filtering by file alone would quietly report last week as today - the exact mistake that would make this useless for checking whether a fix took.";
  let wait_minimum = Number(seconds_minimum) * 1000;
  function scan(file_path) {
    let p = permission_prompt_events_file(file_path, wait_minimum);
    return p;
  }
  let lists = await list_map_unordered_async(paths, scan);
  let span = Number(days) * 24 * 60 * 60 * 1000;
  let cutoff = new Date(Date.now() - span).toISOString();
  let events = [];
  for (let list of lists) {
    function within(event) {
      let b = event.at > cutoff;
      return b;
    }
    let recent = list_filter(list, within);
    list_add_multiple(events, recent);
  }
  return events;
}
