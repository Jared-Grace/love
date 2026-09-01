import { arguments_assert } from "./arguments_assert.mjs";
import { number_is } from "./number_is.mjs";
export function lyric_timing_line_tapped(line) {
  arguments_assert(arguments, 1);
  ("$plain line");
  ("One line of a saved timing document, put back the way the hand left it: the moments that were tapped rather than the moments the finished video uses.");
  ("THE TWO DIFFER BY THE TAP LAG, AND EVERY SAVE TAKES THAT LAG OFF AGAIN. So a screen loaded with the corrected moments and saved again corrected them a second time, and a third on the third visit - which quietly walked the lines nobody came back to fix further and further ahead of the music. Repairing two late lines of twenty is the ordinary second visit, so this was the ordinary path, not an unusual one.");
  ("EACH END IS DECIDED ON ITS OWN RATHER THAN TOGETHER. They are two separate records and either can be missing without the other, so asking one question about the pair would let a half-written line answer for its whole self - and the answer it gave would be about whichever end was asked.");
  ("A MOMENT OF ZERO IS KEPT, BECAUSE ZERO IS THE FIRST MOMENT OF THE SONG. The question here is whether the document remembers a moment, not whether that moment is far enough into the song to look like one, and a line sung from the first note has nothing else it could say.");
  ("A DOCUMENT WRITTEN BEFORE THESE WERE KEPT HAS ONLY THE CORRECTED MOMENTS, and those are handed back untouched. Adding a lag back on would need to know the lag, which such a document does not record; the shift such a passage takes on its next sitting is real, and it is preferred to a repair that would be a guess wearing the shape of a fact.");
  let kept_start = number_is(line.start_tapped);
  let kept_end = number_is(line.end_tapped);
  let line_hand = {
    start: kept_start ? line.start_tapped : line.start,
    end: kept_end ? line.end_tapped : line.end,
    text: line.text,
  };
  return line_hand;
}
