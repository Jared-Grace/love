import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function psalms_verse_halves_span_word(half_first, half_last) {
  arguments_assert(arguments, 2);
  ("$plain half_first");
  ("$plain half_last");
  ("One run of half verses said the way a file name says a range - a bare number where the run covers a whole verse, a number with a letter where it covers one half of one, and two of those joined by a dash where it runs across verses.");
  ("★ IT IS WRITTEN IN THE SINGER'S OWN CONVENTION RATHER THAN IN HALVES THROUGHOUT, BECAUSE THE READER OF THIS IS THE PERSON HOLDING THE FILES. A gap printed as 3a-5b asks its reader to translate it back before they can look for what to sing; printed as 3-5 it is already the words the next recording will be named with. So a half that sits on a whole verse boundary loses its letter, and only a genuine half keeps one.");
  ("A run inside one verse is said with that verse's number and, where it is only half of it, that half's letter. Both halves of one verse come back as the bare number for the same reason: that is the whole verse and the name for a whole verse carries no letter.");
  let same_verse_is = equal(half_first.verse, half_last.verse);
  if (same_verse_is) {
    let whole_is = equal(half_first.half, "a") && equal(half_last.half, "b");
    if (whole_is) {
      let whole = String(half_first.verse);
      return whole;
    }
    let part = String(half_first.verse) + half_first.half;
    return part;
  }
  let opens_whole_is = equal(half_first.half, "a");
  let left = opens_whole_is
    ? String(half_first.verse)
    : String(half_first.verse) + "b";
  let closes_whole_is = equal(half_last.half, "b");
  let right = closes_whole_is
    ? String(half_last.verse)
    : String(half_last.verse) + "a";
  let span = left + "-" + right;
  return span;
}
