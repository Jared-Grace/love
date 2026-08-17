import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_verse_keys_verse_numbers(verse_keys, key) {
  "Every verse of a chapter that holds a word answering to one key, in the order the chapter reads.";
  "This is the answer a claim about how often a word stands in its chapter is checked against. A sentence saying a word is named in six verses is right or wrong depending on this list and on nothing else.";
  "The verses come back in reading order because a chapter numbers its verses with whole numbers, and a list of those laid out by name is already in that order. A chapter numbered any other way would need sorting, and none is.";
  let numbers = object_property_names(verse_keys);
  function holds(verse_number) {
    let keys = property_get(verse_keys, verse_number);
    let held = list_includes(keys, key);
    return held;
  }
  let standing = list_filter(numbers, holds);
  return standing;
}
