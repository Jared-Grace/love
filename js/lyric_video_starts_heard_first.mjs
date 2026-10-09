import { arguments_assert } from "./arguments_assert.mjs";
import { number_is } from "./number_is.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
export function lyric_video_starts_heard_first(starts, starts_heard) {
  arguments_assert(arguments, 2);
  ("$plain starts");
  ("$plain starts_heard");
  ("Where each line of a song begins: where the blind hearing of the recording heard it, and where it heard nothing, where the aligner put it.");
  ("★ THE HEARING WINS BECAUSE IT WAS RIGHT WHERE THE TWO DISAGREED. Scored 2026-10-08 against hand timings of six songs, 121 lines: the hearing missed by 0.62 seconds on average and was never more than a second early; the aligner missed by 1.42 and was more than a second early ten times. On Psalm 150 song 5 the aligner put three lines 2 to 5 seconds early - clashing cymbals, resounding cymbals, everything that has breath - and a person heard every one of them come in too early; the hearing had them right. On song 4 the hearing was right on the three lines a person heard come in late.");
  ("Rejected: the earlier of the two at every line, which this replaces. It was argued from cost - early is cheaper than late - but on song 5 the earlier reading was the aligner's mistake, and a line put up five seconds early with the line before it taken down is not read ahead, it is the wrong words. Rejected too: the aligner first with the hearing only where far apart, which needs a threshold nobody measured.");
  ("A LINE THE HEARING DID NOT PLACE TAKES THE ALIGNER'S MOMENT, BUT ONLY IF THAT MOMENT FITS BETWEEN ITS NEIGHBOURS. Each reading moves forward through the song on its own, but taking a moment from one and its neighbour from the other can step backwards: measured over the 200-odd songs heard so far, four did, each where the aligner was filling in beside a heard line. A line that would come before the one above it or after the one below it is put halfway between them instead, since both neighbours are where the singing was heard. Where no later line was heard there is nothing to put it before, so it is left with no time, and the line above it runs on - the same thing an untapped line does.");
  let chosen = [];
  function heard_after(index) {
    function lambda(value) {
      let v = number_is(value);
      return v;
    }
    let found = starts_heard.slice(index + 1).find(lambda);
    let r = number_is(found) ? found : null;
    return r;
  }
  function fallback(start, index) {
    let low = equal(index, 0) ? 0 : chosen[subtract(index, 1)];
    let high = heard_after(index);
    let low_known = number_is(low);
    let fits_low = not(low_known) || less_than(low, start);
    let high_known = number_is(high);
    let fits_high = not(high_known) || less_than(start, high);
    if (fits_low && fits_high) {
      return start;
    }
    if (not(high_known) || not(low_known)) {
      return null;
    }
    let r = divide(low + high, 2);
    return r;
  }
  function one(start, index) {
    let heard = starts_heard[index];
    let b = number_is(heard);
    let b2 = number_is(start);
    let r = b ? heard : b2 ? fallback(start, index) : null;
    chosen.push(r);
  }
  starts.forEach(one);
  return chosen;
}
