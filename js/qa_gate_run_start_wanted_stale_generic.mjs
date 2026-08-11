import { property_greater_than } from "./property_greater_than.mjs";
import { qa_gate_run_start_wanted_generic } from "./qa_gate_run_start_wanted_generic.mjs";
export function qa_gate_run_start_wanted_stale_generic(flight, stale) {
  "Whether a whole-repo judging is worth starting, given what is already going, how full the machine is, and how long it has been since anything at all was judged.";
  "Its neighbour answers the first two and is left exactly as it was, because what it says is right: a second judging makes both slower, and a judging on a full machine crawls. This adds the only thing that neighbour could not see, which is TIME. Both of its reasons to refuse are true most of the time on a machine ten of us share, and a rule that is right every minute can still be wrong across an afternoon - measured 2026-08-11, the record held thirty-nine commits judged in its whole life while sixty-three sat unjudged from a single day, and the daemon meant to be judging them had written started: false on every line of its journal.";
  "That is starvation rather than caution. Waiting costs nothing only if the waiting ends, and here it did not: the conditions that close the door are caused by the same ten of us whose work the record exists to serve, so the busier the repo gets the less it is ever judged - which is exactly backwards.";
  "So when the record has gone stale the machine's fullness stops being a reason. A judging that crawls still finishes, and a judging that never starts never does.";
  "One refusal survives staleness and it is the only one that must: another JUDGING already going. That is not a machine being busy, it is the same quarter of an hour being spent twice on an answer the first run is already getting - so however old the record is, a second one makes it no fresher. The shares are what a stale run is allowed to push past, because a share belongs to somebody else's gate run rather than to a judging, and it will end on its own.";
  let judging = property_greater_than(flight, "runs", 0);
  if (judging) {
    return false;
  }
  let wanted = qa_gate_run_start_wanted_generic(flight);
  if (wanted) {
    return true;
  }
  return stale;
}
