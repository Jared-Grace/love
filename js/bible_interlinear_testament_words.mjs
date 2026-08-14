import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { ebible_book_code_to_division } from "./ebible_book_code_to_division.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { not } from "./not.mjs";
export async function bible_interlinear_testament_words(testament_name) {
  "Every word record the interlinear holds for one testament, one entry per word and repeats kept, in the order the text runs.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to read and nothing that runs.";
  "One walk, because everything asked of a testament's words is asked of the same walk. The parsings, the English glosses, the transliterations and the Strong's numbers all sit on one record, and a question that wanted only one of them used to bring its own copy of the loop - which meant four ways to get the testament boundary slightly wrong instead of one place to get it right.";
  "The whole record comes back rather than the one field a caller wants, because the caller is the only one who knows which field that is, and a walk that already knows is a walk that has to be written again for the next field.";
  "One testament at a time, because the two are parsed and glossed in different languages by different hands. Anything counting across both would be counting two vocabularies as one, and the Strong's numbers themselves collide - Greek 3056 and Hebrew 3056 are different words wearing the same key.";
  let chapters = await bible_interlinear_chapters_words_cache();
  let collected = [];
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
      list_add_multiple(collected, words);
    }
  }
  return collected;
}
