import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_disagree_seconds } from "./lyric_video_disagree_seconds.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { numbers_apart } from "./numbers_apart.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { lyric_video_flags_ranked } from "./lyric_video_flags_ranked.mjs";
export function lyric_video_document_lines_disagreed(
  document,
  starts,
  starts_heard,
) {
  arguments_assert(arguments, 3);
  ("$plain document");
  ("$plain starts");
  ("$plain starts_heard");
  ("The lines of a song that two readings of its recording do not place at the same moment, worst first, each with how far apart the two put it, which way round they are, and the words of the line so a person can go and listen.");
  ("★ HOW FAR APART THE TWO READINGS ARE DOES NOT SAY HOW MUCH HARM IS DONE, AND WHICH WAY ROUND THEY ARE DOES. A line the aligner puts early shows its words before they are sung and holds them until the next line begins, so nobody watching sees anything wrong at all; a line it puts late shows them after they have been sung, which is the one thing a person can actually catch. Both were being reported by their distance alone, and across twenty six songs that pile held 168 harmless ones beside 156 real ones. The worst early miss measured five seconds and spoils nothing; the worst late one measured thirty, on a psalm whose closing lines arrive half a minute after they are heard.");
  ("★ THAT PARAGRAPH IS KEPT BECAUSE IT IS WHAT WAS BELIEVED, AND MEASUREMENT AGAINST A PERSON'S OWN TIMES SAYS IT IS HALF WRONG. Its two counts were both taken from these two readings and never from anybody's ear, which is the whole of how it went wrong: it is a tally of what the blind reading thinks, and the blind reading is the thing under suspicion. Checked on 2026-10-02 against the four documents somebody timed by ear - the only lines here whose right answers are known - a positive distance is never once wrong about direction, and it catches 16 of the 18 lines the aligner genuinely put late. What it cannot see is an early miss, and a quarter of the genuinely wrong lines are early: the second worst line in the pool is 26 seconds early, and a signed order puts it below every marginal late line in the psalter. The ordering that follows is therefore by distance, and the reasoning for that lives with the thing that does it.");
  ("★ THE FIRST VERSION OF THAT CORRECTION WAS ITSELF WRONG, BY ONE DOCUMENT, AND IT IS WORTH KNOWING HOW. It counted five hand-timed documents and 107 lines, read 38 late against 10 early, and found a positive distance catching only 20 of the 38 with 9 late lines hiding behind an early flag. Twenty eight of those lines came from bsb_PSA_106_1-12_take1, which no person ever timed - every line of it begins 4.36 seconds after the last, which is a song's length divided by its lines rather than anybody listening. It was taken for a person's work because the guard that refuses drafts tests whether each line ends on the very moment the next begins, and two of that document's 27 ends round a hundredth of a second away. Drop it and the 9 hidden late lines become 0. A pool of known-right answers is the one thing in a measurement that cannot be sampled carelessly, because every figure downstream is only as true as its weakest member.");
  ("The lines handed back are the ones where the two readings are further apart than a third of a second, together with any line neither reading could place. That threshold was chosen to accuse rather than to excuse: a line flagged wrongly costs one glance, and a line cleared wrongly ships a video whose words arrive at the wrong moment with nobody left to notice. Measured on the same four documents, accusing is the right side to err on and the third of a second is the best catch on offer: it catches 22 of the 24 genuinely wrong lines, where half a second cuts the flags by a third and catches 18.");
  ("A line neither reading placed is flagged without a distance rather than with one, because there is no distance to be had and a zero there would read as perfect agreement - the one answer the whole measurement exists to tell apart from silence.");
  ("They are gathered in the order the song sings them and handed back in the order a person should look at them, which are two different orders and only one of them is any use to a reader with two thousand of these to get through.");
  let apart_least = lyric_video_disagree_seconds();
  let flagged = [];
  for (let number = 0; less_than(number, document.lines.length); number++) {
    let start = starts[number];
    let start_heard = starts_heard[number];
    let unplaced = equal(start, null) || equal(start_heard, null);
    let away = numbers_apart(start, start_heard);
    let apart = unplaced ? null : number_round_places(away, 3);
    let late = subtract(start, start_heard);
    let behind = unplaced ? null : number_round_places(late, 3);
    let disagreed = unplaced || greater_than(apart, apart_least);
    if (disagreed) {
      let flag = {
        line: number,
        start,
        start_heard,
        apart,
        behind,
        text: document.lines[number].text,
      };
      flagged.push(flag);
    }
  }
  let ranked = lyric_video_flags_ranked(flagged);
  return ranked;
}
