import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_run_start_wanted_generic } from "./qa_gate_run_start_wanted_generic.mjs";
import { property_get } from "./property_get.mjs";
export function qa_gate_run_start_wanted_stale_generic(flight, stale) {
  "Whether a whole-repo judging is worth starting, given what is already going, how full the machine is, and how long it has been since anything at all was judged.";
  "Its neighbour answers the first two and is left exactly as it was, because what it says is right for the asker it was written for: a gate run is slower for every other gate run beside it, and slowest of all on a full machine. This adds the only thing that neighbour could not see, which is TIME. Both of its reasons to refuse are true most of the time on a machine ten of us share, and a rule that is right every minute can still be wrong across an afternoon - measured 2026-08-11, the record held thirty-nine commits judged in its whole life while sixty-three sat unjudged from a single day, and the daemon meant to be judging them had written started: false on every line of its journal.";
  "That is starvation rather than caution. Waiting costs nothing only if the waiting ends, and here it did not: the conditions that close the door are caused by the same ten of us whose work the record exists to serve, so the busier the repo gets the less it is ever judged - which is exactly backwards.";
  "So once the record has gone stale, being slow stops counting as a reason. A judging that crawls still finishes, and a judging that never starts never does.";
  "This was first written keeping one refusal absolute - another JUDGING already going - on the reasoning that a second one makes the record no fresher. That reasoning was sound and the signal it was hung on was wrong, which is worth writing down because it looked exactly like caution. At the time a judging never appeared in the count it was being read off at all, so the whole word being looked for was borne by one thing only, which is somebody running the gates by hand. Measured while this was being corrected: four of them at once, and not one of them a judging. A rule cannot be more careful than its evidence, so the refusal went. The counting has since been repaired - a judging is now found by whose children the shares are - and the refusal is deliberately not being put back on the strength of that, because the reason it was dropped was that the daemon starves without it and that has not changed.";
  "★ BUT BEING OUT OF OVERFLOW MEMORY IS NOT SLOWNESS AND STALENESS DOES NOT OVERRULE IT, WHICH IS THE ONE THING THIS RULE USED TO GET WRONG. Measured 2026-09-02: seven shares hold about eight gigabytes between them, several judgings at once took this machine's free overflow from 3.8 gigabytes to 228 kilobytes, and the machine then killed a share outright. A killed share cannot say which gates it asked, so the whole judging comes back unanswered and NOTHING IS WRITTEN DOWN - which leaves the record exactly as stale as it was, which is the very condition that let this start. Three judgings in a row were spent that way and no verdict was filed by anything but luck.";
  "So the override is over slowness only. A judging admitted onto a busy machine crawls and then files a verdict, and that is the trade the override was written to make; a judging admitted onto a machine with no memory left files nothing at all, so admitting it does not buy the freshness it was admitted for. Refusing there is not caution winning over starvation - it is the one refusal that makes the record LESS stale, because it leaves the memory for the judging that can actually finish.";
  arguments_assert(arguments, 2);
  let wanted = qa_gate_run_start_wanted_generic(flight);
  if (wanted) {
    return true;
  }
  let starved = property_get(flight, "starved");
  if (starved) {
    return false;
  }
  return stale;
}
