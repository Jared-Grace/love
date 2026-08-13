import { daemon_code_commit_last_at } from "./daemon_code_commit_last_at.mjs";
import { daemon_stale_seconds_allowed } from "./daemon_stale_seconds_allowed.mjs";
import { daemon_started_at } from "./daemon_started_at.mjs";
import { divide } from "./divide.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { round } from "./round.mjs";
import { subtract } from "./subtract.mjs";
export async function daemon_stale_or_null(f_name) {
  "A record when this daemon is running code the repo has since moved a day past, and nothing when it is not.";
  "A daemon loads its code once and keeps it for as long as it runs, so committing a change to something it reaches does not reach it. This is the whole of that fault said as a number: the newest commit to its own code, against the second it started.";
  "Nothing to say about a daemon that is not running. That is a real fault and a worse one, but it is somebody else's answer to give, and two checks naming one thing make the second read as a second fault.";
  let started = await daemon_started_at(f_name);
  let stopped = null_is(started);
  if (stopped) {
    return null;
  }
  let code_at = await daemon_code_commit_last_at(f_name);
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
  let n = divide(behind_seconds, allowed_seconds);
  let behind_days = round(n);
  let record = {
    daemon: f_name,
    behind_days,
    behind_seconds,
    started_at: started,
    code_at,
  };
  return record;
}
