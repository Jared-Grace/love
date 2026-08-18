import { permission_replay_rows } from "./permission_replay_rows.mjs";
import { permission_replay_path } from "./permission_replay_path.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { property_get } from "./property_get.mjs";
import { log } from "./log.mjs";
export async function permission_replay_write() {
  "Read the transcripts once and write down which command shapes still stop the human, ranked, so that asking costs a file read";
  "The reading is the expensive half: a week of transcripts is tens of thousands of tool calls, and every one of them is answered by spawning the guard. The answer is the same for everyone who asks it that day, so one of us paying it is all of us knowing.";
  "Nothing here writes an allow rule, and that is deliberate rather than unfinished. A rule decides what may run unasked, so a thing that writes one is a thing the human approves each time - the command that grants is refused a grant of its own for exactly that reason. This gathers the case; the granting stays a hand on a key.";
  "A week, because that is long enough for a shape used a few times a day to out-rank one used once, and short enough that a habit already abandoned falls out of the window rather than sitting at the top of the ranking pretending to be today's friction.";
  "The top hundred and twenty shapes are asked of the guard and the rest are counted and reported unchecked. Asking is the slow part, the counts fall away steeply, and a number saying how much was left unread is honest where a silent cut would read as having looked at everything.";
  let days = 7;
  let count = 120;
  let r = await permission_replay_rows(days, count);
  let path = permission_replay_path();
  await file_write_json(path, r);
  let said = {
    days,
    transcripts: property_get(r, "transcripts"),
    shapes: property_get(r, "shapes"),
    candidates: property_get(r, "candidates").length,
    path,
  };
  log(permission_replay_write.name, said);
  return said;
}
