import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_word_parse } from "./bible_glyph_word_parse.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapter_parse(chapter_stored) {
  arguments_assert(arguments, 1);
  ("$plain chapter_stored");
  ("the chapter is one entry as a chapter file stores it, its words still in shorthand. It is data to read and it does not run.");
  ("One stored picture Bible chapter with every word parsed out of the shorthand, which is the form everything downstream reads.");
  ("IT IS THE PARSING ON ITS OWN, SEPARATED FROM FINDING THE CHAPTER, because there are now two ways to arrive at a stored chapter and only one way to read one. ",
    fn_name("bible_glyph_chapter"),
    " finds it in the whole Bible, which is what a program running here can do; ",
    fn_name("bible_glyph_chapter_fetched"),
    " asks the network for the one file, which is what a page on a phone must do so that opening one chapter does not download the other twenty four.");
  ("Two ways in and one parser is the whole point of the separation. A second copy of the parsing would be a second answer to what the shorthand means, and the two would drift apart in silence - a reader would then see one Bible on the page and a gate would check another.");
  let verses = [];
  for (let verse of chapter_stored.verses) {
    let words = [];
    for (let word of verse.words) {
      let parsed = bible_glyph_word_parse(word);
      list_add(words, parsed);
    }
    list_add(verses, {
      verse_number: verse.verse_number,
      words,
    });
  }
  let chapter_parsed = {
    chapter_code: chapter_stored.chapter_code,
    reference: chapter_stored.reference,
    verses,
  };
  return chapter_parsed;
}
