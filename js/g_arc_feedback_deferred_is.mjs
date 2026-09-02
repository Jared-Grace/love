import { arguments_assert } from "./arguments_assert.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
export function g_arc_feedback_deferred_is(note) {
  "Say whether one note against an arc has been put off to the second pass, so that a note nobody means to answer yet stops behaving like a note that must be answered now.";
  "$plain note";
  "a note is one filed remark about one line of one person's arc, holding which person, which turn, which field, the remark itself, and whether it has been put off.";
  "A NOTE FILED BEFORE THERE WAS ANY SUCH THING READS AS STANDING, and that is why the flag is asked for rather than read straight off. Every note already in the store was written without the field, and a missing field must mean the old behaviour - answer it on the next revision - because that is the behaviour those notes were filed under. Only a note somebody deliberately put off says so.";
  "PUT OFF IS NOT THE SAME AS ANSWERED OR AS WITHDRAWN. An answered note is cleared away and a withdrawn one is deleted; this one is still true, still about a real fault, and still waiting - it has only been ruled out of scope for the pass that is running. So it survives a revision instead of being cleared by one, and it is still on the page for the reviewer to see.";
  arguments_assert(arguments, 1);
  let flag = property_or_null(note, "deferred");
  let deferred = equal(flag, true);
  return deferred;
}
