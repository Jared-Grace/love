import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_digits_leading } from "./text_digits_leading.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function psalms_verses_halves_sung_or_null(verse_first, verse_last) {
  arguments_assert(arguments, 2);
  ("$plain verse_first");
  ("$plain verse_last");
  ("Every half verse a sung range covers, named the way the file names name them - the verse number with the letter a for its first half and b for its second - or nothing when either end of the range is not a verse this understands.");
  ("★ COVERAGE IS COUNTED IN HALF VERSES BECAUSE THE SINGING IS CUT IN HALF VERSES. Six of the sung passages stop inside a verse and say so with a letter - 7a, 24b, 13a. A chapter sung as 1-7a and then 7b-12 is sung whole, and counting in whole verses would either call verse seven missing, which is a false accusation, or call it covered by the first half alone, which is a missed gap. Halves are the smallest piece any of these names can name, so they are the unit that makes both answers right.");
  ("A letter at the start of a range means the half it names and everything after it, and a letter at the end means the half it names and everything before it. So 7b-12 begins at the second half of verse seven and 1-7a stops after the first half of verse seven.");
  ("An end written as a bare number means the whole of that verse, which is the first half when it opens a range and the second half when it closes one.");
  ("Nothing, rather than an empty list, when an end does not read as a verse. An empty list is the honest answer for a range that covers nothing and there is no such range, so handing one back for an unreadable end would make a name nobody understands look like a psalm with nothing sung in it.");
  ("A range running backwards reads as nothing rather than as an empty span, for the same reason: it is a name this does not understand, and the caller counting coverage must not be told that singing which exists covers no verses.");
  let digits_first = text_digits_leading(verse_first);
  let digits_last = text_digits_leading(verse_last);
  if (equal(digits_first, null)) {
    return null;
  }
  if (equal(digits_last, null)) {
    return null;
  }
  let rest_first = verse_first.slice(digits_first.length);
  let rest_last = verse_last.slice(digits_last.length);
  let letters = ["a", "b"];
  let halves_known = ["", "a", "b"];
  let first_known_is = list_includes(halves_known, rest_first);
  let last_known_is = list_includes(halves_known, rest_last);
  if (not(first_known_is)) {
    return null;
  }
  if (not(last_known_is)) {
    return null;
  }
  let number_first = Number(digits_first);
  let number_last = Number(digits_last);
  if (less_than(number_last, number_first)) {
    return null;
  }
  let half_first = equal(rest_first, "b") ? "b" : "a";
  let half_last = equal(rest_last, "a") ? "a" : "b";
  if (equal(number_first, number_last)) {
    if (equal(half_first, "b") && equal(half_last, "a")) {
      return null;
    }
  }
  let halves = [];
  for (
    let verse = number_first;
    less_than_equal(verse, number_last);
    verse = verse + 1
  ) {
    for (let letter of letters) {
      let opens_late_is =
        equal(verse, number_first) &&
        equal(letter, "a") &&
        equal(half_first, "b");
      if (opens_late_is) {
        continue;
      }
      let closes_early_is =
        equal(verse, number_last) &&
        equal(letter, "b") &&
        equal(half_last, "a");
      if (closes_early_is) {
        continue;
      }
      list_add(halves, String(verse) + letter);
    }
  }
  return halves;
}
