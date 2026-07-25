import { claude_transcript_paths_recent } from "./claude_transcript_paths_recent.mjs";
import { permission_prompt_events_paths } from "./permission_prompt_events_paths.mjs";
export async function permission_prompt_events_recent(days, seconds_minimum) {
  "Every tool call from the last days that took at least seconds_minimum to come back, across every session active in that window. The floor is a parameter and not a constant because the right value is a measurement, not a guess: a hook runs after EVERY tool call here, so the cheapest calls are not free, and the floor has to sit above that overhead before a wait can be read as a person.";
  let paths = claude_transcript_paths_recent(days);
  let events = await permission_prompt_events_paths(
    paths,
    days,
    seconds_minimum,
  );
  return events;
}
