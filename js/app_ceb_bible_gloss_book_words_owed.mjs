import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "./app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
import { gloss_chapters_bible_words_distinct } from "./gloss_chapters_bible_words_distinct.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first } from "./list_first.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export async function app_ceb_bible_gloss_book_words_owed(book_code) {
  "Every Cebuano word one book of the New Testament is written with that the dictionary has not been asked about yet.";
  "$plain book_code";
  "the code is a book's name, like MAT, chosen from the Bible's own book numbering. It names text to read and nothing that runs.";
  "This is a book's worth of asking rather than the whole Testament's, so the writing of one book overlaps the asking for the next instead of waiting behind all of them. The books are not equal shares of the work either: the first one asked for carries the common words the whole Testament is written in and is far the longest, and every book after it is cheaper than the one before by everything the two share.";
  "Nothing is guessed to be a name and dropped. Names were dropped here once, on the grounds that no dictionary carries a person or a place, and a word the text only ever writes with a capital was taken for one - which is true of names and true as well of an ordinary word that happens to open every sentence it stands in. That guess could only ever be wrong in one direction: a real word dropped is never asked about, and nothing afterwards knows it was dropped or why.";
  "What it bought was time, and only time. A name asked about is one asking, once, and the answer that there is no entry is written down like any other, so it is never asked again. Guessing was the cheaper way to be right most of the time; asking is the way to be right every time, and the difference between them is hours against an explanation quietly missing from a chapter.";
  "For the same reason a word the printed dictionary already carries is asked for all the same. That book gives an entry and this asking gives what the word is built from, which are different things, and a word the printed one appears to carry may be a different word that is merely spelled the same.";
  let bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let bible_folder = list_first(bible_folders);
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  let written = await gloss_chapters_bible_words_distinct(
    bible_folder,
    chapter_codes,
  );
  let words = list_map_unique(written, text_lower_to);
  let known = await binisaya_words_known();
  function owed_is(word) {
    let unasked = property_exists_not(known, word);
    return unasked;
  }
  let owed = list_filter(words, owed_is);
  return owed;
}
