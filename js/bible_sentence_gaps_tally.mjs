import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_max_or_null } from "./list_max_or_null.mjs";
import { list_size } from "./list_size.mjs";
export function bible_sentence_gaps_tally(joined) {
  "A pool of gaps turned into the shape of it: how many places were counted, how many stopped at each distance, and the furthest any of them reached.";
  "The furthest alone was what this used to be read for, and the furthest alone is the thing that misleads. A range says a distance is possible; only the tally says whether it happens. Both are kept here because a bound is sized against the far end and a wording is sized against the middle, and the two are different questions asked of the same counting.";
  arguments_assert(arguments, 1);
  let gaps = property_get(joined, "gaps");
  let unread = property_get(joined, "unread");
  let unfinished = property_get(joined, "unfinished");
  let tally = list_tally(gaps);
  let most = list_max_or_null(gaps);
  let counted = list_size(gaps);
  let tallied = {
    counted,
    tally,
    most,
    unread,
    unfinished,
  };
  return tallied;
}
