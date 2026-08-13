import { permission_prompt_events_blocked } from "./permission_prompt_events_blocked.mjs";
import { permission_prompt_events_confirmed } from "./permission_prompt_events_confirmed.mjs";
import { permission_prompt_events_shaped } from "./permission_prompt_events_shaped.mjs";
import { permission_allow_verbs } from "./permission_allow_verbs.mjs";
export async function permission_prompt_shaped_events(days, seconds_minimum) {
  "every proved interruption over a window that no rule naming a function could answer, each already carrying the verb a rule would have to name instead";
  "the whole opening of the shape reports, which is four steps that only ever run together - narrow to the sessions that recorded blocking, keep the waits a block falls inside, read what is already granted, and file each wait under the verb that is not. splitting them between two callers meant the next reader had to notice they were the same four steps, and the reading that decides which interruptions are real would have been the thing that quietly came apart.";
  let events = await permission_prompt_events_blocked(days, seconds_minimum);
  let confirmed = permission_prompt_events_confirmed(events);
  let verbs_granted = await permission_allow_verbs();
  let shaped = permission_prompt_events_shaped(confirmed, verbs_granted);
  return shaped;
}
