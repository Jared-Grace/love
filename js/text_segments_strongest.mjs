import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { math_min } from "./math_min.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function text_segments_strongest(text, words, parts) {
  "The way of cutting one run of letters into a given number of pieces that leaves the rarest piece as common as it can be, counting each piece by how often the writing uses it as a word on its own.";
  "$plain text";
  "the run of letters to cut: a word, and nothing that runs.";
  "$plain words";
  "how often the writing uses each word, kept as a word against its count.";
  "$plain parts";
  "how many pieces to cut it into: a number, and nothing that runs. Asking for one piece cuts nothing and simply says how common the whole run is.";
  "The rarest piece is what the cut is scored by, because a cut is only as good as the rarest of the words it claims to have found. A cut that turns up a household word and a word nobody writes has found nothing.";
  "Pieces of a single character are not offered. Every script has marks that stand alone as a letter, and cutting one letter off the front finds a piece for almost anything.";
  "Nothing comes back where the run is too short to cut into that many pieces at all. A cut whose rarest piece is a word the writing never uses does come back, because saying so is the caller's business and not this one's.";
  "The best count so far is kept beside the best cut rather than read back off it, because reading it back means reaching into a thing that is not there yet on the first turn of the loop.";
  let one = equal(parts, 1);
  if (one) {
    let short = less_than(text.length, 2);
    if (short) {
      return null;
    }
    let seen = words[text];
    let count = seen ? seen : 0;
    let whole = {
      segments: [text],
      weakest: count,
    };
    return whole;
  }
  let best = null;
  let best_weakest = -1;
  let last = subtract(text.length, 2);
  let fewer = subtract(parts, 1);
  for (let cut = 2; less_than_equal(cut, last); cut++) {
    let before = text.slice(0, cut);
    let seen_before = words[before];
    let count_before = seen_before ? seen_before : 0;
    let rest = text.slice(cut);
    let after = text_segments_strongest(rest, words, fewer);
    let missing = null_is(after);
    if (missing) {
      continue;
    }
    let weakest_after = property_get(after, "weakest");
    let weakest = math_min(count_before, weakest_after);
    let stronger = greater_than(weakest, best_weakest);
    if (stronger) {
      let segments_after = property_get(after, "segments");
      let segments = list_concat_multiple([[before], segments_after]);
      best_weakest = weakest;
      best = {
        segments,
        weakest,
      };
    }
  }
  return best;
}
