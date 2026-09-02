import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { ebible_verses_readaloud_source } from "./ebible_verses_readaloud_source.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_words_any_script_pattern } from "./text_words_any_script_pattern.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { add } from "./add.mjs";
export async function ebible_words_sightings(bible_folder) {
  "$plain bible_folder";
  "Every word one translation uses, as its publisher wrote it, with how many times it stands there and where it is first met: which chapter, which verse, and the whole of that verse's words.";
  "The verse it was first met in is carried along because a word on its own settles nothing. Whether a run of letters is one word or two with the space missing is a question about the sentence it stands in, so anybody ruling on it has to be shown that sentence, and going back for it afterwards means reading the whole translation again once per word.";
  "First is the first the reading comes to rather than a chosen one. Nothing here knows which verse shows a word off best, and picking by any measure it could invent would be dressing an arbitrary choice as a judgment.";
  "The publisher's own writing is read rather than the repaired reading of it. A reading whose whole purpose is to show somebody what a file says cannot be shown that file with things already put right in it.";
  "A chapter this translation does not read aloud, or one whose lines cannot be laid against its page's marks, is stepped over. Those are chapters with no verses to count words in rather than a fault here.";
  arguments_assert(arguments, 1);
  let books = await ebible_version_books(bible_folder);
  let chapter_codes = await ebible_books_to_chapter_codes(books, bible_folder);
  let sightings = {};
  for (let chapter_code of chapter_codes) {
    let verses = await ebible_verses_readaloud_source(
      bible_folder,
      chapter_code,
    );
    let unread = null_is(verses);
    if (unread) {
      continue;
    }
    for (let verse of verses) {
      let text = property_get(verse, "text");
      let verse_number = property_get(verse, "verse_number");
      let pattern = text_words_any_script_pattern();
      let words = text.match(pattern);
      let wordless = null_is(words);
      if (wordless) {
        continue;
      }
      for (let word of words) {
        let seen = sightings[word];
        if (seen) {
          let counted = property_get(seen, "count");
          object_merge_set(seen, {
            count: add(counted, 1),
          });
          continue;
        }
        sightings[word] = {
          count: 1,
          chapter_code,
          verse_number,
          text,
        };
      }
    }
  }
  return sightings;
}
