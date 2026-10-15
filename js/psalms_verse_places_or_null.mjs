import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_digits_leading } from "./text_digits_leading.mjs";
import { equal } from "./equal.mjs";
import { list_alphabet_lower } from "./list_alphabet_lower.mjs";
export function psalms_verse_places_or_null(verse_first, verse_last) {
  arguments_assert(arguments, 2);
  ("$plain verse_first");
  ("$plain verse_last");
  ("The two ends of a sung range as places in its chapter, counted so that one number says both which verse and how far into it - or nothing where either end is not a place this understands, or where the range runs backwards.");
  ("★ A PLACE IS THE VERSE TIMES A HUNDRED PLUS WHICH PART OF IT, WHICH IS WHAT LETS THE WHOLE OF COVERAGE BE ADDING ONE. Two sung ranges join up when the second begins at the very next place after the first ends, and a gap is the places in between; said as plain numbers both of those are one comparison, and the carry from the end of a verse to the start of the next happens by itself. A verse has at most twenty six named parts and a hundred leaves room for all of them, so the number also reads: 2402 is verse 24, part c.");
  ("★ WHERE A RANGE ENDS AT A WHOLE VERSE ITS PLACE IS THE END OF THAT VERSE AND NOT ITS BEGINNING, AND THAT ASYMMETRY IS THE POINT. Psalm 103 sung as 1-11 and 13-22 has a hole at verse twelve; the same two ranges read as beginnings would touch and the hole would vanish. So the opening end of a range is the start of its verse and the closing end is the finish of its verse, and the two are told apart here rather than by every caller.");
  ("★ THE PARTS ARE WHATEVER THE NAMES SAY THEY ARE, WHICH IS HOW A VERSE CUT IN THREE IS UNDERSTOOD AT ALL. Psalm 104 is sung as 14-24b and then 24c-31, so verse twenty four is in at least three parts, while Psalm 141 is cut at 7a and 7b and has two. Nothing here needs to know how many a verse has: part b of a verse is followed by part c of it, and whether that part was ever sung is answered by whether some range covers that place. A reading that assumed halves called the second of those psalms seven verses short while printing a name it could not read beside the wrong answer.");
  ("A letter in capitals is read as the same part, because the reading that hands these ends over matches a file name without regard to case and two recordings on this disk spell the word Psalm with a capital P and one does not.");
  ("A range running backwards is nothing rather than an empty span, because the caller is counting what is covered and must not be told that singing which exists covers nothing.");
  function place_or_null(verse_text, slot_whole) {
    let digits_leading = text_digits_leading(verse_text);
    if (equal(digits_leading, null)) {
      return null;
    }
    let rest = verse_text.slice(digits_leading.length).toLowerCase();
    let verse = Number(digits_leading);
    let whole_is = equal(rest, "");
    if (whole_is) {
      let place_whole = multiply(verse, 100) + slot_whole;
      return place_whole;
    }
    let letters = list_alphabet_lower();
    let slot = letters.indexOf(rest);
    if (less_than(slot, 0)) {
      return null;
    }
    let place = multiply(verse, 100) + slot;
    return place;
  }
  let key_first = place_or_null(verse_first, 0);
  let key_last = place_or_null(verse_last, 99);
  if (equal(key_first, null)) {
    return null;
  }
  if (equal(key_last, null)) {
    return null;
  }
  if (less_than(key_last, key_first)) {
    return null;
  }
  let places = {
    key_first: key_first,
    key_last: key_last,
  };
  return places;
}
