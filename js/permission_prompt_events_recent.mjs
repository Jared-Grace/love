import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { claude_transcript_paths_recent } from "./claude_transcript_paths_recent.mjs";
import { permission_prompt_events_file } from "./permission_prompt_events_file.mjs";
export async function permission_prompt_events_recent(days, seconds_minimum) {
  "Every tool call across the last days of sessions that took at least seconds_minimum to come back. The floor is a parameter and not a constant because the right value is a measurement, not a guess: a hook runs after EVERY tool call here, so the cheapest calls are not free, and the floor has to sit above that overhead before a wait can be read as a person.";
  let paths = claude_transcript_paths_recent(days);
  let wait_minimum = Number(seconds_minimum) * 1000;
  function scan(file_path) {
    let p = permission_prompt_events_file(file_path, wait_minimum);
    return p;
  }
  let lists = await list_map_unordered_async(paths, scan);
  let events = [];
  for (let list of lists) {
    list_add_multiple(events, list);
  }
  return events;
}
