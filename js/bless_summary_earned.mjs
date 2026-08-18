import { and } from "./and.mjs";
import { abs } from "./abs.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { bless_window_ms } from "./bless_window_ms.mjs";
export function bless_summary_earned(blessings) {
  "Whether the last two blessings prayed add up to the next rung of the ladder - the same";
  "number of people covered both times, and the second following the first closely enough";
  "to be one movement rather than two occasions.";
  "It reads only the LAST TWO on purpose. The unlock is a summary of what the player just";
  "did, so a matching pair from earlier in the session is not it - a rung earned by a pair";
  "the player has since walked away from would be a reward for history rather than a";
  "summary of the prayer they are in.";
  let size = list_size(blessings);
  if (less_than(size, 2)) {
    let too_few = false;
    return too_few;
  }
  let last = list_get(blessings, subtract(size, 1));
  let before = list_get(blessings, subtract(size, 2));
  let same = equal(property_get(last, "count"), property_get(before, "count"));
  let gap = abs(subtract(property_get(last, "at"), property_get(before, "at")));
  let close = less_than_equal(gap, bless_window_ms());
  let earned = and(same, close);
  return earned;
}
