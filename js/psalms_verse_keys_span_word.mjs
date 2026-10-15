import { arguments_assert } from "./arguments_assert.mjs";
import { list_alphabet_lower } from "./list_alphabet_lower.mjs";
import { equal } from "./equal.mjs";
export function psalms_verse_keys_span_word(key_first, key_last) {
  arguments_assert(arguments, 2);
  ("$plain key_first");
  ("$plain key_last");
  ("One run of a chapter said the way the recordings name a range - a bare verse number where the run opens at the start of a verse or closes at the end of one, the number with a part letter where it does not, and the two joined by a dash where they differ.");
  ("★ IT IS WRITTEN IN THE SINGER'S OWN CONVENTION RATHER THAN IN THE COUNTED PLACES, BECAUSE THE READER OF IT IS THE PERSON HOLDING THE MICROPHONE. A gap printed as 1200-1899 asks its reader to decode it before they can sing it; printed as 12-18 it is already the words the next recording will be named with. So a place that sits on a verse boundary loses its letter, and only a place genuinely inside a verse keeps one.");
  ("A run inside one verse is said with that verse's number and the letter of whichever end of it is a part, because a dash between two spellings of one verse number reads as a range of verses rather than as a piece of one.");
  let slot_first = key_first % 100;
  let slot_last = key_last % 100;
  let verse_first = (key_first - slot_first) / 100;
  let verse_last = (key_last - slot_last) / 100;
  let letters = list_alphabet_lower();
  let opens_whole_is = equal(slot_first, 0);
  let closes_whole_is = equal(slot_last, 99);
  let one_verse_is = equal(verse_first, verse_last);
  if (one_verse_is) {
    let whole_is = opens_whole_is && closes_whole_is;
    if (whole_is) {
      let bare = String(verse_first);
      return bare;
    }
    if (closes_whole_is) {
      let tail = String(verse_first) + letters[slot_first];
      return tail;
    }
    if (opens_whole_is) {
      let head = String(verse_first) + letters[slot_last];
      return head;
    }
    let same_part_is = equal(slot_first, slot_last);
    if (same_part_is) {
      let part = String(verse_first) + letters[slot_first];
      return part;
    }
    let inside =
      String(verse_first) +
      letters[slot_first] +
      "-" +
      String(verse_first) +
      letters[slot_last];
    return inside;
  }
  let left = opens_whole_is
    ? String(verse_first)
    : String(verse_first) + letters[slot_first];
  let right = closes_whole_is
    ? String(verse_last)
    : String(verse_last) + letters[slot_last];
  let span = left + "-" + right;
  return span;
}
