import { divide_round } from "./divide_round.mjs";
import { seconds_day } from "./seconds_day.mjs";
import { daemon_code_commit_last_at } from "./daemon_code_commit_last_at.mjs";
import { daemon_stale_seconds_allowed } from "./daemon_stale_seconds_allowed.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
export async function daemon_stale_or_null(f_name, started, path_seconds) {
  "A record when this daemon is running code the repo has since moved a day past, and nothing when it is not.";
  "A daemon loads its code once and keeps it for as long as it runs, so committing a change to something it reaches does not reach it. This is the whole of that fault said as a number: the newest commit to its own code, against the second it started.";
  "The second it started and the recently committed files are both handed in rather than asked for here, because they are the same two questions for every daemon and both are dear to ask.";
  let code_at = await daemon_code_commit_last_at(f_name, path_seconds);
  let uncommitted = null_is(code_at);
  if (uncommitted) {
    return null;
  }
  let behind_seconds = subtract(code_at, started);
  let allowed_seconds = daemon_stale_seconds_allowed();
  let stale = greater_than(behind_seconds, allowed_seconds);
  let current = not(stale);
  if (current) {
    return null;
  }
  ("said in days as well, because the number of seconds a daemon is behind by is exactly the shape of number a reader skips over");
  let day_seconds = seconds_day();
  let behind_days = divide_round(behind_seconds, day_seconds);
  let record = {
    daemon: f_name,
    behind_days,
    behind_seconds,
    started_at: started,
    code_at,
  };
  return record;
}
