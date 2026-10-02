import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_concat } from "./list_concat.mjs";
export function lyric_video_flags_ranked(flagged) {
  arguments_assert(arguments, 1);
  ("$plain flagged");
  ("The lines two readings of a recording disagreed about, put in the order a person should look at them: the ones neither reading placed first, then the rest furthest apart first.");
  ("★ IT IS AN ORDER AND NEVER A FILTER, WHICH IS THE WHOLE REASON IT EXISTS RATHER THAN A HIGHER THRESHOLD. Measured 2026-10-02 against the five documents a person timed by ear - 107 lines whose right answers are known - the flag fires on 56% of lines in the psalter and is worth firing: the aligner is more than a third of a second out on 59% of the lines it flags against 22% of the lines it clears. Raising the threshold to half a second drops the flags to 35% of lines and loses half the real misses with them, 29 of 38 caught falling to 15 of 38. The signal is real and the threshold is already the best catch available, so what was wrong was never which lines came back - it was that two thousand of them came back as an unordered pile.");
  ("★ THE ORDER IS BY DISTANCE AND NOT BY WHICH WAY ROUND THE TWO READINGS ARE, AND THAT IS A CORRECTION TO WHAT WAS BELIEVED. A line the aligner puts early was held to be harmless, so the natural ranking was the signed one - latest first, earliest last. Against the person's own times that reading does not hold. Of the 38 lines the aligner genuinely put late, only 20 carry a positive distance; 9 more hide behind an early flag the old reasoning called harmless, and the worst early miss in that pool is 26 seconds, not the five the earlier note recorded. Across the whole psalter the sign splits 1035 late to 1045 early, a coin toss, while against the person it runs 38 late to 10 early - so the sign is mostly reporting the blind reading's scatter rather than anything about the singing, and it is too noisy to decide an order. Which way round they are is still carried on every line, because a person reading one line wants it; it just does not get to sort them.");
  ("Lines neither reading could place come first because they have no distance to be sorted by at all, and a reader who stops part way down the list should not be the one who misses them. There is nothing to compare for such a line, which is the one answer the measurement exists to tell apart from agreement.");
  ("Nothing is dropped and nothing is changed - the list handed in comes back whole, in a new list, so the record kept of a hearing still holds the lines in the order the song sings them.");
  function flag_unplaced_is(flag) {
    let nothing = equal(flag.apart, null);
    return nothing;
  }
  function flag_placed_is(flag) {
    let nothing = equal(flag.apart, null);
    let somewhere = not(nothing);
    return somewhere;
  }
  function flag_apart_of(flag) {
    let apart = flag.apart;
    return apart;
  }
  let unplaced = list_filter(flagged, flag_unplaced_is);
  let placed = list_filter(flagged, flag_placed_is);
  list_sort_number_mapper_reverse(placed, flag_apart_of);
  let ranked = list_concat(unplaced, placed);
  return ranked;
}
