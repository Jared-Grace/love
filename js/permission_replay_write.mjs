import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { permission_prompt_confirmed_rows } from "./permission_prompt_confirmed_rows.mjs";
import { property_set } from "./property_set.mjs";
import { permission_replay_rows } from "./permission_replay_rows.mjs";
import { permission_replay_path } from "./permission_replay_path.mjs";
import { property_get } from "./property_get.mjs";
import { log } from "./log.mjs";
export async function permission_replay_write() {
  "Read the transcripts once and write down which command shapes still stop the human, ranked, so that asking costs a file read";
  "The reading is the expensive half: a week of transcripts is tens of thousands of tool calls, and every one of them is answered by spawning the guard. The answer is the same for everyone who asks it that day, so one of us paying it is all of us knowing.";
  "Nothing here writes an allow rule, and that is deliberate rather than unfinished. A rule decides what may run unasked, so a thing that writes one is a thing the human approves each time - the command that grants is refused a grant of its own for exactly that reason. This gathers the case; the granting stays a hand on a key.";
  "A week, because that is long enough for a shape used a few times a day to out-rank one used once, and short enough that a habit already abandoned falls out of the window rather than sitting at the top of the ranking pretending to be today's friction.";
  "The top hundred and twenty shapes are asked of the guard and the rest are counted and reported unchecked. Asking is the slow part, the counts fall away steeply, and a number saying how much was left unread is honest where a silent cut would read as having looked at everything.";
  "The replay half sees only the shell, because the guard is only ever asked about a command and there is nothing to replay for a tool that runs one. So the proved half is written beside it: every wait a recorded approval block falls inside, which needs no guard and so covers a file edit, a fetch and a browser alike. One is a ranking of what today's rules would still stop, the other a ranking of what actually stopped somebody, and neither can be read off the other.";
  let days = 7;
  let count = 120;
  let r = await permission_replay_rows(days, count);
  let seconds_minimum = 0;
  let confirmed = await permission_prompt_confirmed_rows(
    "label",
    days,
    seconds_minimum,
    count,
  );
  property_set(r, "confirmed", confirmed);
  ("both rankings are then put to the same safety check, so the file answers what can be removed today rather than only what still stops the human. The check writes nothing: a reading that granted as it read would be an unattended thing editing the file that decides what may run unattended.");
  ("the proved rows are named here rather than where they were grouped, because they were grouped by the label a rule would wear and a grant is written to a function. The one row can want both readings at once.");
  let confirmed_rows = property_get(confirmed, "rows");
  permission_rows_run_named(confirmed_rows);
  let candidates = property_get(r, "candidates");
  let replay_grants = await permission_rows_grant_verdicts(
    candidates,
    "run_name",
  );
  let proved_grants = await permission_rows_grant_verdicts(
    confirmed_rows,
    "run_name",
  );
  property_set(r, "replay_grants", replay_grants);
  property_set(r, "proved_grants", proved_grants);
  let path = permission_replay_path();
  ("The reading is written over rather than written fresh. It is a photograph of the last week and there is only ever one worth having, so the second run of a thing meant to run every day must replace yesterday's and not refuse because yesterday's is there.");
  await file_overwrite_json(path, r);
  let said = {
    days,
    transcripts: property_get(r, "transcripts"),
    shapes: property_get(r, "shapes"),
    candidates: property_get(r, "candidates").length,
    proved: property_get(confirmed, "counted"),
    path,
  };
  log(permission_replay_write.name, said);
  return said;
}
