import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { number_is } from "./number_is.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
export function lyric_video_document_times_spread_is(document) {
  arguments_assert(arguments, 1);
  ("$plain document");
  ("Whether a timing document still holds the even spread it was drafted with, so that writing times into it can take nothing away from anybody.");
  ("★ IT EXISTS SO THAT A COMMAND MAY NEVER WRITE OVER A PERSON'S EAR. Somebody sits with a song and moves every line onto the beat it is sung on, and that is the one part of this work no command can redo. A document is otherwise indistinguishable before and after that afternoon: same fields, same shape, numbers throughout. Asking here first is what turns writing times into a safe thing to run again.");
  ("★ THE TEST IS THE DRAFTING'S OWN ARITHMETIC READ BACK, NOT A GUESS ABOUT WHAT AN EVEN SPREAD LOOKS LIKE. The drafting gives every line the same share and so ends each one at the very moment the next begins - it works both out from the same sum, so they round to the same hundredth and match exactly. Everything that writes times from hearing instead takes a sliver off the end, so that two lines never stand on one frame, and that sliver is the whole difference. There is no tolerance to choose and nothing to tune.");
  ("A line missing either of its moments says the document is part timed and part not, which is somebody's afternoon interrupted rather than a draft, so it answers no. A document of one line has no line following it to be flush against and so cannot be told either way; that also answers no, because the whole point of the question is to refuse when unsure.");
  let lines = document.lines;
  if (less_than(lines.length, 2)) {
    return false;
  }
  for (let line of lines) {
    let started = number_is(line.start);
    let ended = number_is(line.end);
    if (not(started) || not(ended)) {
      return false;
    }
  }
  let last = subtract(lines.length, 1);
  for (let number = 0; less_than(number, last); number++) {
    let flush = not_equal(lines[number].end, lines[number + 1].start);
    if (flush) {
      return false;
    }
  }
  return true;
}
