import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function span_row_better(held, offered) {
  arguments_assert(arguments, 2);
  ("Whichever of two runs leaves the smaller worst piece behind, with nothing held counting as worse than anything offered.");
  ("Kept apart from the walk that offers the runs so that the walk says only where it looks and this says only what it prefers. The two change for different reasons: which ends may be tried is about what the cut can survive, and which end is best is about what the cut is worth.");
  ("A tie keeps what was already held, which is the earlier-ending run. Between two cuts that leave the same worst piece the shorter one moves fewer lines, so it is the smaller change for the same gain.");
  let nothing_held = null_is(held);
  if (nothing_held) {
    return offered;
  }
  let held_worst = property_get(held, "worst");
  let offered_worst = property_get(offered, "worst");
  let better = less_than(offered_worst, held_worst);
  if (better) {
    return offered;
  }
  return held;
}
