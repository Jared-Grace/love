import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { claude_transcript_paths_recent } from "./claude_transcript_paths_recent.mjs";
import { permission_prompt_events_file } from "./permission_prompt_events_file.mjs";
export async function permission_prompt_events_recent(days) {
  "Every tool call across the last days of sessions that took a second or more to come back. A second is the floor because it is comfortably longer than any auto-approved round trip and comfortably shorter than a human noticing a dialog, so nothing below it can involve a person.";
  let paths = claude_transcript_paths_recent(days);
  function scan(file_path) {
    let p = permission_prompt_events_file(file_path, 1000);
    return p;
  }
  let lists = await list_map_unordered_async(paths, scan);
  let events = [];
  for (let list of lists) {
    list_add_multiple(events, list);
  }
  return events;
}
