import { property_get } from "./property_get.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { json_equal } from "./json_equal.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_explain_back_reference_is } from "./gloss_explain_back_reference_is.mjs";
import { object_copy_property_set } from "./object_copy_property_set.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
export function gloss_passage_entries_pointers_filled(
  entries,
  passages,
  passage,
) {
  "The word rows handed in, with every explanation that tells the reader they have met this word before swapped for the nearest explanation above it in the chapter.";
  "$plain entries";
  "the rows are the ones about to be drawn, handed in already read out of their stored writing rather than read again here, so that a page drawing rows this does not recognise still draws exactly the rows it would have drawn.";
  "$plain passages";
  "the passages are the whole chapter in reading order, because the explanation being pointed at usually stands in an earlier passage than the sentence pointing at it.";
  "$plain passage";
  "the passage is the one being drawn now. It is found again among the whole chapter by the verses it covers rather than by being the very same object, because rows are read back out of stored writing each time and so are never the same object twice.";
  "The reader is walked down the chapter exactly as they would read it, and the last thing said about each word is kept. A pointing sentence then shows what the reader last read about that word, which is what the sentence was always saying. Nothing is written down to make this work and so nothing can go out of date: measured over the whole Urdu store, all one thousand pointing sentences have such an explanation above them, and not one of them needed anything stored to be found.";
  "Where a word has never been explained above, the sentence is left exactly as it stands. That is what the reader saw before, so the worst this can do is nothing.";
  "The walk stops at the passage being drawn, because nothing below it has been read yet and so nothing below it can be what the sentence meant.";
  let wanted = property_get(passage, "verse_numbers");
  let key = gloss_entry_explain_key();
  let said = {};
  for (let chapter_passage of passages) {
    let verse_numbers = property_get(chapter_passage, "verse_numbers");
    let here = json_equal(verse_numbers, wanted);
    let read = gloss_passage_entries(chapter_passage);
    let walked = read;
    if (here) {
      walked = entries;
    }
    let rows = [];
    for (let entry of walked) {
      let explain = property_get_or_null(entry, key);
      let written = null_not_is(explain);
      let row = entry;
      if (written) {
        let word = gloss_entry_word_read(entry);
        let folded = text_lower_to(word);
        let pointer = gloss_explain_back_reference_is(explain);
        if (pointer) {
          let nearest = property_get_or_null(said, folded);
          let known = null_not_is(nearest);
          if (known) {
            row = object_copy_property_set(entry, key, nearest);
          }
        } else {
          property_set(said, folded, explain);
        }
      }
      list_add(rows, row);
    }
    if (here) {
      return rows;
    }
  }
  return entries;
}
