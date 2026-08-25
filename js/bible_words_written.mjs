import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique } from "./list_unique.mjs";
import { property_get } from "./property_get.mjs";
import { text_punctuation_apostrophe_kept_removed } from "./text_punctuation_apostrophe_kept_removed.mjs";
import { text_words } from "./text_words.mjs";
export async function bible_words_written(bible_folder) {
  "$plain bible_folder";
  "Every different word one whole bible is written with, spelled the way the bible spells it, capitals and all.";
  "★ THE CAPITALS ARE KEPT ON PURPOSE, BECAUSE THEY ARE THE ONLY MARK IN THE TEXT THAT SAYS A WORD IS A NAME. Putting everything into small letters here would be one line shorter and would throw away the answer to the question this was built for. Whoever wants the small letters can ask for them afterwards; nobody can put a capital back.";
  "The punctuation goes but the apostrophe stays, so a possessive is still the word a dictionary holds an entry for.";
  arguments_assert(arguments, 1);
  let chapter_codes = await ebible_chapter_codes(bible_folder);
  let written = [];
  for (let chapter_code of chapter_codes) {
    let verses = await ebible_verses(bible_folder, chapter_code);
    for (let verse of verses) {
      let text = property_get(verse, "text");
      let words = text_words(text);
      for (let word of words) {
        let bare = text_punctuation_apostrophe_kept_removed(word);
        list_add(written, bare);
      }
    }
  }
  function said(word) {
    let g = greater_than(word.length, 0);
    return g;
  }
  let nonempty = list_filter(written, said);
  let unique = list_unique(nonempty);
  return unique;
}
