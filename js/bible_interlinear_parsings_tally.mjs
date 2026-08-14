import { object_property_names } from "./object_property_names.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { property_get } from "./property_get.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function bible_interlinear_parsings_tally() {
  "How many words in the whole interlinear carry each spelled-out parsing, as a tally from the parsing to its count.";
  "Anything written to turn a parsing into a sentence has to answer for every parsing there is, and the only honest way to know what those are is to count them. A table written from what a person remembers meeting covers what they have read and goes quiet on the rest, and going quiet is the failure that reads as success: the word simply gets no sentence and nobody is told why.";
  "The count comes with the vocabulary because the two answer different questions. The list says what must be handled; the counts say what handling it is worth, so a parsing standing on four words in the whole Bible can be left for a person and a parsing standing on eleven thousand cannot.";
  "A word the table gives no parsing is left out rather than gathered under a blank key, for the same reason the Strong's tally leaves those out: it is a real gap in the source, and a count that folded them together would read as an answer.";
  let chapters = await bible_interlinear_chapters_words_cache();
  let parsings = [];
  for (let chapter_code of object_property_names(chapters)) {
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
  let tally = list_tally(parsings);
  return tally;
}
