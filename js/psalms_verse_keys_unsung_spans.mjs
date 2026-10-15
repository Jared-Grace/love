import { math_min } from "./math_min.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { psalms_verse_keys_span_word } from "./psalms_verse_keys_span_word.mjs";
export function psalms_verse_keys_unsung_spans(places_sung, verse_last) {
  arguments_assert(arguments, 2);
  ("$plain places_sung");
  ("$plain verse_last");
  ("The parts of a chapter that none of the handed-in ranges covers, said as the runs they form, in the order they come in the chapter.");
  ("★ TWO RANGES JOIN WHEN THE SECOND BEGINS AT THE VERY NEXT PLACE AFTER THE FIRST ENDS, WHICH IS WHY THE PLACES ARE COUNTED AND NOT COMPARED AS WORDS. Sung 1-7a and then 7b-12, the chapter is whole; sung 1-11 and then 13-22, verse twelve is missing. The only difference between those two is whether one place follows the other, and asked as plain numbers that is adding one.");
  ("The runs are what makes the answer usable: a psalm nobody has sung has three hundred missing places, and a list of three hundred is nothing a person can act on, while the same answer joined up says 1-14 and 18-21, which is the next two recordings named for them.");
  ("The chapter's length is handed in, as everywhere else on this record, because how many verses a psalm has is in the text of the psalm rather than in the names of the files, and a judging that fetched it could not be run from a written case at all.");
  ("Singing that runs past the end of the chapter is let stand rather than refused. It means the chapter length handed in disagrees with a name on the disk, which is a fault about that name and is named by the check that compares the two; swallowing it here as a gap would report it in the wrong place.");
  ("An empty answer means every part of the chapter is covered. A chapter with nothing handed in comes back as one run covering it whole, so an empty answer cannot be mistaken for nothing having been asked.");
  let sorted = list_copy(places_sung);
  function lambda(place_left, place_right) {
    let difference = subtract(place_left.key_first, place_right.key_first);
    return difference;
  }
  sorted.sort(lambda);
  let merged = [];
  for (let place of sorted) {
    let open_is = list_empty_not_is(merged);
    if (open_is) {
      let held = merged[subtract(merged.length, 1)];
      let joins_is = less_than_equal(place.key_first, held.key_last + 1);
      if (joins_is) {
        let reaches_is = greater_than(place.key_last, held.key_last);
        if (reaches_is) {
          held.key_last = place.key_last;
        }
        continue;
      }
    }
    let one = {
      key_first: place.key_first,
      key_last: place.key_last,
    };
    list_add(merged, one);
  }
  let key_chapter_last = multiply(verse_last, 100) + 99;
  let key_next = 100;
  let spans = [];
  for (let held2 of merged) {
    let gap_is = greater_than(held2.key_first, key_next);
    if (gap_is) {
      let a = subtract(held2.key_first, 1);
      let key_gap_last = math_min(a, key_chapter_last);
      let item = psalms_verse_keys_span_word(key_next, key_gap_last);
      list_add(spans, item);
    }
    let moves_is = greater_than(held2.key_last + 1, key_next);
    if (moves_is) {
      key_next = held2.key_last + 1;
    }
  }
  let tail_is = less_than_equal(key_next, key_chapter_last);
  if (tail_is) {
    let item2 = psalms_verse_keys_span_word(key_next, key_chapter_last);
    list_add(spans, item2);
  }
  return spans;
}
