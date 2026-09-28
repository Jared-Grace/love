import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_intersect_empty_not_is } from "./list_intersect_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function gloss_verse_keys_verse_numbers(verse_keys, keys) {
  "Every verse of a chapter that holds a word sharing a key with the word being asked about, in the order the chapter reads.";
  "This is the answer a claim about how often a word stands in its chapter is checked against. A sentence saying a word is named in six verses is right or wrong depending on this list and on nothing else.";
  "The verses come back in reading order because a chapter numbers its verses with whole numbers, and a list of those laid out by name is already in that order. A chapter numbered any other way would need sorting, and none is.";
  "A word is asked about by all of its keys at once, and a verse answers if it shares any one of them. Reducing either side to a single key first would be choosing, for the other side, which of the things a shape could be it is - and the shape is exactly what cannot say.";
  let numbers = object_property_names(verse_keys);
  function holds(verse_number) {
    let standing = property_get(verse_keys, verse_number);
    let held = list_intersect_empty_not_is(standing, keys);
    return held;
  }
  let standing = list_filter(numbers, holds);
  return standing;
}
