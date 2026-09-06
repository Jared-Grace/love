import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_disagree_seconds } from "./lyric_video_disagree_seconds.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { numbers_apart } from "./numbers_apart.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
export function lyric_video_document_lines_disagreed(
  document,
  starts,
  starts_heard,
) {
  arguments_assert(arguments, 3);
  ("$plain document");
  ("$plain starts");
  ("$plain starts_heard");
  ("The lines of a song that two readings of its recording do not place at the same moment, each with how far apart the two put it, which way round they are, and the words of the line so a person can go and listen.");
  ("★ HOW FAR APART THE TWO READINGS ARE DOES NOT SAY HOW MUCH HARM IS DONE, AND WHICH WAY ROUND THEY ARE DOES. A line the aligner puts early shows its words before they are sung and holds them until the next line begins, so nobody watching sees anything wrong at all; a line it puts late shows them after they have been sung, which is the one thing a person can actually catch. Both were being reported by their distance alone, and across twenty six songs that pile held 168 harmless ones beside 156 real ones. The worst early miss measured five seconds and spoils nothing; the worst late one measured thirty, on a psalm whose closing lines arrive half a minute after they are heard.");
  ("The lines handed back are the ones where the two readings are further apart than a third of a second, together with any line neither reading could place. That threshold was chosen to accuse rather than to excuse: a line flagged wrongly costs one glance, and a line cleared wrongly ships a video whose words arrive at the wrong moment with nobody left to notice.");
  ("A line neither reading placed is flagged without a distance rather than with one, because there is no distance to be had and a zero there would read as perfect agreement - the one answer the whole measurement exists to tell apart from silence.");
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
  return flagged;
}
