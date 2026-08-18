import { permission_replay_reading } from "./permission_replay_reading.mjs";
import { log } from "./log.mjs";
export async function permission_replay_report() {
  "Show the daily prompt reading to somebody at a keyboard: what could stop prompting today, and what is still stopping them that no grant answers.";
  "The working out takes a minute and a half of transcript reading and one guard process per shape, and it is the same answer for everyone who asks it that day. So the daemon pays it once and this hands it back for the cost of a file read, which is what makes the question askable at the start of every session rather than once when somebody remembers.";
  let r = await permission_replay_reading();
  log(permission_replay_report.name, r);
  return r;
}
