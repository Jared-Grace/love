import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { app_shared_bible_verses_separator } from "./app_shared_bible_verses_separator.mjs";
import { hash_number_label } from "./hash_number_label.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_join } from "./list_join.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_unique } from "./list_unique.mjs";
import { number_largest } from "./number_largest.mjs";
import { numbers_nearest } from "./numbers_nearest.mjs";
import { text_split } from "./text_split.mjs";
export function app_shared_bible_hash_field_verse(verse_numbers) {
  "The which-verse field of a bible link, described in the shape the checking of links reads - built around the verses a chapter turned out to have.";
  "It is the one field that cannot be described until the page has fetched something. Whether there is a verse 40 is a question about this chapter and no other, so the verses have to be in hand before the question can be asked at all, and the description is made after the fetch rather than sitting in the list of fields the page checks before it starts.";
  "A link asks for a run of verses and it is treated as one thing rather than as several, so a reader is offered the whole run back corrected in one press instead of being asked the same question once per verse. A run half real and half not is still a run the reader did not mean.";
  "Every verse the chapter has is one the reader could have meant, so nothing is too far away to offer and the nearest real number is always worth saying. A part with no number in it at all has no nearest and is dropped from what is offered, which is how 5-fish comes back as 5.";
  let key = app_shared_bible_verse_hash_key();
  let separator = app_shared_bible_verses_separator();
  function parts_of(value) {
    let parts = text_split(value, separator);
    return parts;
  }
  function valid_is(value) {
    function known_is(part) {
      let known = list_includes(verse_numbers, part);
      return known;
    }
    let list = parts_of(value);
    let all_known = list_all_is(list, known_is);
    return all_known;
  }
  function suggestions(value) {
    function nearest_of(part) {
      let apart_maximum = number_largest();
      let nearest = numbers_nearest(verse_numbers, part, apart_maximum);
      if (list_empty_is(nearest)) {
        return null;
      }
      let one = list_first(nearest);
      return one;
    }
    let list2 = parts_of(value);
    let found = list_map_filter_null_not_is(list2, nearest_of);
    let distinct = list_unique(found);
    if (list_empty_is(distinct)) {
      let none = [];
      return none;
    }
    let run = list_join(distinct, separator);
    let offered = [run];
    return offered;
  }
  let field = {
    key,
    name: "verse",
    list_is: false,
    number_is: false,
    valid_is,
    suggestions,
    label: hash_number_label,
  };
  return field;
}
