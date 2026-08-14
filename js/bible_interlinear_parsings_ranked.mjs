import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { ebible_book_code_to_division } from "./ebible_book_code_to_division.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function bible_interlinear_parsings_ranked(testament_name) {
  "Every spelled-out parsing the interlinear uses inside one testament, commonest first, each beside the number of words carrying it.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to count and nothing that runs.";
  "Anything written to turn a parsing into a sentence has to answer for every parsing there is, and the only honest way to know what those are is to count them. A table written from what a person remembers meeting covers what they have read and goes quiet on the rest, and going quiet is the failure that reads as success: the word simply gets no sentence and nobody is told why.";
  "The counts come with the vocabulary because the two answer different questions. The list says what must be handled; the counts say what handling it is worth, so a parsing standing on four words can be left for a person to write and a parsing standing on eleven thousand cannot. Commonest first is the order the work wants to be done in.";
  "One testament at a time, because the two are parsed in different languages by different hands: the Greek says Verb - Aorist Indicative Active and the Hebrew says something far longer, and a single ranking would interleave two vocabularies that nothing will ever handle together.";
  "A word the table gives no parsing is left out rather than gathered under a blank key, for the same reason the Strong's tally leaves those out: it is a real gap in the source, and a count that folded them together would read as an answer.";
  let chapters = await bible_interlinear_chapters_words_cache();
  let parsings = [];
  for (let chapter_code of object_property_names(chapters)) {
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let division = ebible_book_code_to_division(book_code);
    let name = property_get(division, "testament");
    let b = equal(name, testament_name);
    if (not(b)) {
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
  let ranked = list_tally_ranked(parsings);
  return ranked;
}
