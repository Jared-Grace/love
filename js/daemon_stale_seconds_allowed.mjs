import { seconds_day } from "./seconds_day.mjs";
export function daemon_stale_seconds_allowed() {
  "How far behind the code a running daemon is allowed to fall before it counts as stale - one day, in seconds.";
  "Some grace has to be allowed, because several of us edit the shared small functions all day and every daemon reaches those. Held to nothing at all, a daemon would count as stale within minutes of starting and the answer would be red always, which says the same thing as never.";
  "A day is what makes the answer mean something a reader can act on: it says a full day has passed with the daemon running code the repo has since moved on from, and nobody restarted it. The one this was built for had been running for three weeks and would have been named on its second day.";
  let seconds = 1;
  return seconds;
}
