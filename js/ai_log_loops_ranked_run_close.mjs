import { arguments_assert } from "./arguments_assert.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_set } from "./property_set.mjs";
export function ai_log_loops_ranked_run_close(
  session,
  lengths,
  previous,
  varied,
  identical,
  spent,
  loops,
  longest,
) {
  arguments_assert(arguments, 8);
  ("Shut an open run and record it, if it was ever a run at all.");
  let length = property_or_null(lengths, session);
  let missing = null_is(length);
  if (missing) {
    return;
  }
  let single = less_than(length, 2);
  if (single) {
    return;
  }
  let step = property_get(previous, session);
  let wasted = subtract(length, 1);
  let changed = property_get(varied, session);
  if (not(changed)) {
    property_count_add(identical, step, wasted);
    return;
  }
  property_count_add(spent, step, wasted);
  property_count_add(loops, step, 1);
  let best = property_or_null(longest, step);
  let unseen = null_is(best);
  if (unseen) {
    best = 0;
  }
  let beaten = greater_than(length, best);
  if (beaten) {
    property_set(longest, step, length);
  }
}
