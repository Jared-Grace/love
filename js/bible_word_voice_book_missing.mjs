import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { bible_word_voices } from "./bible_word_voices.mjs";
import { bible_word_voice_path } from "./bible_word_voice_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
export async function bible_word_voice_book_missing(book_code) {
  arguments_assert(arguments, 1);
  ("$plain book_code");
  ("the code names one book, spelled the way the book divisions spell it. It names a book to look through and nothing that runs.");
  ("The written words of one book of the Bible that have no recording in the first voice of their language, so a reader of the picture Bible who taps one and presses the speaker hears nothing.");
  ("IT ASKS THE INTERLINEAR'S WORDS, BECAUSE THOSE ARE THE ONES A TAPPED PICTURE SAYS. The original Bible app has its own reading of a chapter, and what it recorded is what its page shows; a picture Bible word is the interlinear's spelling, and the two need not agree.");
  ("Each spelling is counted once, however many times the book uses it.");
  let chapters = await bible_interlinear_chapters_words_cache();
  let asked = [];
  let missing = [];
  for (let chapter_code of object_property_names(chapters)) {
    let book = ebible_chapter_code_to_book(chapter_code);
    let b = equal(book, book_code);
    if (not(b)) {
      continue;
    }
    let verses = property_get(chapters, chapter_code);
    for (let verse of verses) {
      for (let word of verse.words) {
        let original = word.original;
        if (list_includes(asked, original)) {
          continue;
        }
        list_add(asked, original);
        let list = bible_word_voices(original);
        let voice_name = list_first(list);
        let path = bible_word_voice_path(voice_name, original);
        let file_path = web_assets_folder_join(path);
        let there = await file_exists(file_path);
        if (not(there)) {
          list_add(missing, original);
        }
      }
    }
  }
  let r = {
    book_code,
    asked: asked.length,
    missing: missing.length,
    missing_words: missing,
  };
  return r;
}
