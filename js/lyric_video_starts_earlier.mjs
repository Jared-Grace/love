import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_is } from "./number_is.mjs";
import { less_than } from "./less_than.mjs";
export function lyric_video_starts_earlier(starts, starts_heard) {
  arguments_assert(arguments, 2);
  ("$plain starts");
  ("$plain starts_heard");
  ("Where each line of a song begins, taking whichever of the two readings of the recording places it sooner.");
  ("★ THE EARLIER READING WINS BECAUSE THE TWO WAYS OF BEING WRONG DO NOT COST THE SAME. A line put up a moment before it is sung is read a moment before it is heard, which is how a reader follows a song anyway; a line put up after it is sung leaves the viewer looking at the words just finished while new ones are being sung, and that is the fault a person notices. Measured 2026-10-08 on Psalm 150, song 4: the three lines a person heard come in late were the three where the blind hearing was earlier than the aligner, by 0.8, 4.4 and 3.5 seconds, and the lines where the hearing was later were not complained of.");
  ("Rejected: trusting the hearing wherever the two are far apart. On that same song it would have moved the opening line two and a half seconds later, and on the next song it moved two lines five seconds later, which is the costly direction. Rejected too: taking the earlier only on lines flagged as disagreeing, which ties this rule to a second threshold kept somewhere else for a different purpose.");
  ("Each list only ever moves forward through the song, so taking the sooner of two at every line still moves forward, and the lines stay in order. A line the hearing did not place keeps the aligner's moment, and the other way round.");
  function earlier(start, index) {
    let heard = starts_heard[index];
    let b = number_is(heard);
    if (not(b)) {
      return start;
    }
    let b2 = number_is(start);
    if (not(b2)) {
      return heard;
    }
    let r = less_than(heard, start) ? heard : start;
    return r;
  }
  let chosen = starts.map(earlier);
  return chosen;
}
