import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { ebible_book_code_to_division } from "./ebible_book_code_to_division.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";

export async function bible_interlinear_parsings_list(testament_name) {
  "The spelled-out parsing of every word inside one testament, one entry per word and repeats kept, in the order the text runs.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to read and nothing that runs.";
  "The repeats are the whole value here. Anything asking what parsings there are wants to know which of them are worth handling as much as it wants to know that they exist, and only a list that kept its duplicates can answer both by being counted.";
  "One testament at a time, because the two are parsed in different languages by different hands: the Greek says Verb - Aorist Indicative Active and the Hebrew says something far longer, and one list would interleave two vocabularies that nothing will ever handle together.";
  "A word the table gives no parsing is left out rather than entered blank. It is a real gap in the source, and a blank counted alongside the rest would read as a parsing that says nothing.";
  let chapters = await bible_interlinear_chapters_words_cache();
  let parsings = [];
  for (let chapter_code of object_property_names(chapters)) {
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let division = ebible_book_code_to_division(book_code);
    let inside = property_equals(division, "testament", testament_name);
    if (not(inside)) {
      continue;
    }
    let verses = property_get(chapters, chapter_code);
    for (let verse of verses) {
      let words = property_get(verse, "words");
      for (let word of words) {
        let parsing = property_get(word, "parsing_long");
        if (not(parsing)) {
          continue;
        }
        list_add(parsings, parsing);
      }
    }
  }
  return parsings;
}
