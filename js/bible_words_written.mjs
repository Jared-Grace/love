import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_words_read } from "./bible_folder_words_read.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export async function bible_words_written(bible_folder) {
  "$plain bible_folder";
  "Every different word one whole bible is written with, spelled the way the bible spells it, capitals and all.";
  "★ THE CAPITALS ARE KEPT ON PURPOSE, BECAUSE THEY ARE THE ONLY MARK IN THE TEXT THAT SAYS A WORD IS A NAME. Putting everything into small letters here would be one line shorter and would throw away the answer to the question this was built for. Whoever wants the small letters can ask for them afterwards; nobody can put a capital back.";
  "The punctuation goes, and which marks are punctuation is the bible's own language's business - a dash is a letter of a Cebuano word and a separator of an English one - so the reader is asked for by folder rather than settled once here.";
  arguments_assert(arguments, 1);
  let words_read = bible_folder_words_read(bible_folder);
  let chapter_codes = await ebible_chapter_codes(bible_folder);
  let written = [];
  for (let chapter_code of chapter_codes) {
    let verses = await ebible_verses(bible_folder, chapter_code);
    for (let verse of verses) {
      let text = property_get(verse, "text");
      let words = words_read(text);
      list_add_multiple(written, words);
    }
  }
  let unique = list_unique(written);
  return unique;
}
