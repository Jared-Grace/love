import { permission_prompt_run_rows } from "./permission_prompt_run_rows.mjs";
import { permission_rows_grant_checked } from "./permission_rows_grant_checked.mjs";
export async function permission_prompts_grant_checked(days, seconds_minimum) {
  "write an allow rule for every dispatcher function that actually cost the human a prompt and passes the safety check, and say why for each one it refuses";
  "the set comes from the record of interruptions rather than from a list handed in, because a list handed in is a guess about what costs the human time and the record is a measurement of it.";
  "that record is wiped whenever the machine restarts, so a short answer here is not proof of a short backlog. the replay family asks the same question of the transcripts, which are not wiped, and its grant-checking half is this command standing on that ranking instead of on this one.";
  let rows = await permission_prompt_run_rows(days, seconds_minimum);
  let grouped = await permission_rows_grant_checked(rows, "label");
  let r = {
    days: Number(days),
    seconds_minimum: Number(seconds_minimum),
    checked: rows.length,
    grouped,
  };
  return r;
}
