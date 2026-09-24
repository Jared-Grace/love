import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export function chapter_passages_verse_order_sort(passages) {
  "A chapter's passages put back into the order the chapter is read in, earliest verse first.";
  "A PASSAGE STORE IS WRITTEN ONE PASSAGE AT A TIME AND EVERY WRITE PUTS ITS PASSAGE LAST, so the order a chapter ends up in is the order it happened to be authored in and never the order it is read in. Measured on 2026-09-24, a hundred and eighty-one of the two hundred and sixty chapters of the Urdu gloss store held their verses out of order - Hebrews twelve read verses one to seventeen, then twenty and twenty-one, then eighteen and nineteen - because a passage covering several verses takes longer to write and so lands after the single verses that follow it.";
  "This is what a reader of that store is shown and what every explanation written from it is checked against, so the order is not a tidiness question. An explanation that says this word stood in verse eighteen is telling the truth about the Bible and a lie about the file, and a reading that walks the file finds nothing behind it.";
  "The first verse a passage covers is what it is sorted on, because two passages never cover the same verse - the chapter is divided into passages and a division does not overlap - so the first number orders them completely and no second key is needed.";
  "The numbers are stored as text and are read back as numbers here, because as text verse ten sorts before verse two.";
  function passage_number(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let first = list_first(verse_numbers);
    let number = number_from_text(first);
    return number;
  }
  let sorted = list_sort_number_mapper(passages, passage_number);
  return sorted;
}
