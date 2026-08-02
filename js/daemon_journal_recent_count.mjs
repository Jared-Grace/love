export function daemon_journal_recent_count() {
  "how many of a daemon's most recent lines are worth reading when the question is 'is this one working right now'";
  "enough that a pass which prints a line per step still shows a whole step, and few enough that four daemons answered at once still fit on a screen";
  let count = 20;
  return count;
}
