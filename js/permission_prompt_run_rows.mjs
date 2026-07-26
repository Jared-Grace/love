import { permission_prompt_events_blocked } from "./permission_prompt_events_blocked.mjs";
import { permission_prompt_events_confirmed } from "./permission_prompt_events_confirmed.mjs";
import { permission_prompt_events_run_named } from "./permission_prompt_events_run_named.mjs";
import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
export async function permission_prompt_run_rows(days, seconds_minimum) {
  "which dispatcher functions actually made the human stop and approve, commonest first — the demand an allow rule could answer";
  "proved waits only, the ones a recorded approval block falls inside, because a rule written from suspicion is a rule written for a cost nobody paid. the ranking is the whole point: it says which grant to spend the checking on first, rather than granting whatever came to mind.";
  let events = await permission_prompt_events_blocked(days, seconds_minimum);
  let confirmed = permission_prompt_events_confirmed(events);
  let named = permission_prompt_events_run_named(confirmed);
  let rows = permission_prompt_events_grouped_by(named, "run_name");
  return rows;
}
