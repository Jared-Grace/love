import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_concat } from "./list_concat.mjs";
export function lyric_video_flags_ranked(flagged) {
  arguments_assert(arguments, 1);
  ("$plain flagged");
  ("The lines two readings of a recording disagreed about, put in the order a person should look at them: the ones neither reading placed first, then the rest furthest apart first.");
  ("★ IT IS AN ORDER AND NEVER A FILTER, WHICH IS THE WHOLE REASON IT EXISTS RATHER THAN A HIGHER THRESHOLD. Measured 2026-10-02 against the four documents a person timed by ear - 79 lines whose right answers are known - the flag fires on 56% of lines in the psalter and is worth firing: the aligner is more than a third of a second out on 47% of the lines it flags against 6% of the lines it clears. Raising the threshold to half a second drops the flags to 35% of lines and loses a quarter of the real misses with them, 22 of 24 caught falling to 18 of 24. The signal is real and the threshold is already the best catch available, so what was wrong was never which lines came back - it was that two thousand of them came back as an unordered pile.");
  ("★ THE ORDER IS BY DISTANCE AND NOT BY WHICH WAY ROUND THE TWO READINGS ARE, BECAUSE THE SIGN CANNOT SEE A LARGE EARLY MISS AT ALL. A line the aligner puts early was held to be harmless, so the natural ranking was the signed one - latest first, earliest last. Against the person's own times the sign is accurate as far as it goes: of 30 flags carrying a positive distance, 16 are genuinely late and not one is genuinely early, and those 16 are 16 of the 18 late lines there are. What it cannot do is rank, because a quarter of the genuinely wrong lines are early ones, and the second worst line in the whole pool is 26 seconds early. A signed order buries that line below every marginal late line in the psalter. Distance has no such blind side: ranked by distance the four worst real errors - 62 seconds, 26 seconds, 6 seconds, 3 seconds - come back as the top four. Which way round they are is still carried on every line, because a person reading one line wants it; it just does not get to sort them.");
  ("★ AN EARLIER VERSION OF THIS PARAGRAPH SAID THE SIGN WAS MOSTLY NOISE, AND THAT WAS A CONTAMINATED TRUTH POOL TALKING. It read 38 late against 10 early and a positive distance catching only 20 of the 38, with 9 late lines hiding behind an early flag. Twenty eight of those 107 lines came from bsb_PSA_106_1-12_take1, which was never timed by a person at all - every one of its lines is 4.36 seconds after the last, a sum divided out rather than an ear, and the guard that is supposed to refuse such a document let it through because two of its 27 line ends round a hundredth of a second away from the next line's start. Drop it and the 9 hidden late lines become 0. The argument for distance survives the correction and the arithmetic behind it does not, which is why the old figures are written here rather than quietly replaced. One thing in it was never contaminated: across the whole psalter the sign splits 1035 late to 1045 early, a coin toss, where the truth runs 3 to 1.");
  ("Lines neither reading could place come first because they have no distance to be sorted by at all, and a reader who stops part way down the list should not be the one who misses them. There is nothing to compare for such a line, which is the one answer the measurement exists to tell apart from agreement.");
  ("Nothing is dropped and nothing is changed - the list handed in comes back whole, in a new list, so the record kept of a hearing still holds the lines in the order the song sings them.");
  function flag_unplaced_is(flag) {
    let nothing = equal(flag.apart, null);
    return nothing;
  }
  function flag_placed_is(flag) {
    let somewhere = equal_not(flag.apart, null);
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
